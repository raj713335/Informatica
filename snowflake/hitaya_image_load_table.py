import snowflake.connector
from snowflake.connector.pandas_tools import write_pandas
import pandas as pd
from PIL import Image
import base64
import os
import io

# Replace with your Snowflake account details
conn_info = {
    "account": "TKEQKPC-BM33183",
    "user": "JB",
    "password": "Abcd@12345",
    "role": "ACCOUNTADMIN",
    "warehouse": "COMPUTE_WH",
    "database": "HITAYA_DB",
    "schema": "HITAYA_SKIN_CANCER_IMAGE_TEST_SCHEMA"
}

# Establish a connection to Snowflake
conn = snowflake.connector.connect(**conn_info)

# Define the table name where you want to upload the image data
table_name = 'ACTINIC_KERATOSIS_111'

# Load your image file
image_path = '/Users/debankita/hitaya/skin_cancer_dataset/Test/actinic_keratosis'

# List to store file paths
file_list = []

# Scan the directory and append file paths to the list
for filename in os.listdir(image_path):
    if os.path.isfile(os.path.join(image_path, filename)):
        file_list.append(os.path.join(image_path, filename))

print(file_list)

for image_path in file_list:
    with open(image_path, 'rb') as img_file:
        # Convert the image to binary format
        img = Image.open(img_file)
        img_byte_arr = io.BytesIO()
        img.save(img_byte_arr, format='jpeg')
        img_byte_arr = img_byte_arr.getvalue()
        # Encode the binary data to base64 string
        encoded_img = base64.b64encode(img_byte_arr).decode('utf-8')

        # Convert image bytes to a format that can be stored in a DataFrame
        img_df = pd.DataFrame({
            'IMAGENAME': [image_path],
            'IMAGEDATA': [encoded_img]
        })

        # Use write_pandas to upload the DataFrame directly into the Snowflake table
        write_pandas(conn, img_df, table_name)
# Close the connection
conn.close()

