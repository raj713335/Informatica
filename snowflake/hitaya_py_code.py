from snowflake.snowpark import Session

# Replace with your Snowflake account details
connection_parameters = {
    "account": "TKEQKPC-BM33183",
    "user": "JB",
    "password": "Abcd@12345",
    "role": "ACCOUNTADMIN",
    "warehouse": "COMPUTE_WH",
    "database": "hitaya_db",
    "schema": "HITAYA_IMAGE_SCHEMA"
}

# Create a Snowflake session
session = Session.builder.configs(connection_parameters).create()

# Step 1: Create a Snowflake Stage
session.sql("""
CREATE OR REPLACE STAGE IMAGE_FILES
DIRECTORY = (ENABLE = TRUE, AUTO_REFRESH = FALSE)
ENCRYPTION = (TYPE = 'SNOWFLAKE_SSE')
COMMENT = 'Stage to store Image Files'
""").collect()

# Step 2: Upload JPG-Files from a local folder to the Snowflake Stage
session.file.put(
    local_file_name='/Users/user/Downloads/skin_cancer_dataset/Test/actinic_keratosis/*.jpg',
    stage_location='@IMAGE_FILES',
    auto_compress=False,
    overwrite=True
)

# Step 3: Update the Directory Table (can be automated via Snowflake Tasks)
session.sql('ALTER STAGE IMAGE_FILES REFRESH').collect()

# Step 4: Query Image Meta Data
image_df = session.sql("SELECT * FROM DIRECTORY(@IMAGE_FILES)")
image_df.show()