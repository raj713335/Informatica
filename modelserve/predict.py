import logging
import pickle
import numpy as np

"""
This file should be named as 'predict.py' and should contain the 'ModelServe' class and the 'predict' method.
"""
class ModelServe:

    def __init__(self):
        """
        Initialization method for the deployment. Invoked once during deployment startup.
        Load your ML models here and use them in the predict function for serving individual requests.
        """
        logging.info('Initializing models for serving prediction requests')

    def predict(self, request):
        """
        Return model prediction for a request. Invoked for every individual request.
        Implement this method.

        Arguments:
        request -- a Python dictionary representing JSON body of a prediction request.
        """
        # Load the pre-trained model during initialization
        pickle_file = './breast_cancer.pkl'
        pickle_disease = open(pickle_file, "rb")
        model = pickle.load(pickle_disease)        
        
        logging.info('Processing the prediction request')

        input_data = np.array(list(request.values())).reshape(1, -1)

        # Make prediction using the pre-trained model
        prediction = model.predict(input_data)

        # Construct the prediction response
        if prediction[0] == 1:
            return_msg = "Malignant"
        else:
            return_msg = "Benign"
        return return_msg

# sample = {
#     'RADIUS_MEAN': 17.99,
#     'TEXTURE_MEAN': 10.38,
#     'PERIMETER_MEAN': 122.8,
#     'AREA_MEAN': 1001,
#     'SMOOTHNESS_MEAN': 0.1184,
#     'COMPACTNESS_MEAN': 0.2776,
#     'CONCAVITY_MEAN': 0.3001,
#     'CONCAVE_POINTS_MEAN': 0.1471,
#     'SYMMETRY_MEAN': 0.2419,
#     'FRACTAL_DIMENSION_MEAN': 0.07871,
#     'RADIUS_SE': 1.095,
#     'TEXTURE_SE': 0.9053,
#     'PERIMETER_SE': 8.589,
#     'AREA_SE': 153.4,
#     'SMOOTHNESS_SE': 0.006399,
#     'COMPACTNESS_SE': 0.04904,
#     'CONCAVITY_SE': 0.05373,
#     'CONCAVE_POINTS_SE': 0.01587,
#     'SYMMETRY_SE': 0.03003,
#     'FRACTAL_DIMENSION_SE': 0.006193,
#     'RADIUS_WORST': 25.38,
#     'TEXTURE_WORST': 17.33,
#     'PERIMETER_WORST': 184.6,
#     'AREA_WORST': 2019,
#     'SMOOTHNESS_WORST': 0.1622,
#     'COMPACTNESS_WORST': 0.6656,
#     'CONCAVITY_WORST': 0.7119,
#     'CONCAVE_POINTS_WORST': 0.2654,
#     'SYMMETRY_WORST': 0.4601,
#     'FRACTAL_DIMENSION_WORST': 0.1189
# }

# # Create an instance of the ModelServe class
# model_serve = ModelServe()

# # Call the predict method with the sample request
# prediction_result = model_serve.predict(sample)
# print(prediction_result)
