import Diagram from "../../../../assets/images/Chronic-Kidney-Disease.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function StudyChronicKidneyDisease() {
  useEffect(() => {
    let hash = window.location.hash;

    if (hash) {
      let elem = document.getElementById(hash.slice(1));

      if (elem) {
        elem.setAttribute("style", "scroll-margin-top: 80px");
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mt-4 mb-5 container animated fadeInRight">
      <div className="row">
        <div className="col-md-8">
          <h1 className="font-bold">Chronic Kidney Disease</h1>
          <p>
            Chronic Kidney Disease (CKD) is a long-term and progressive
            condition in which the kidneys gradually lose their function over
            time. The kidneys play an essential role in filtering waste and
            excess fluids from the blood, which are then eliminated from the
            body through urine. When the kidneys are damaged, waste and fluids
            build up in the body, which can lead to a range of complications.
          </p>

          <div className="row my-5">
            <div className="col-md-8 offset-md-2">
              <img className="img-fluid" src={Diagram} alt="" />
            </div>
          </div>

          <p className="mt-4">
            CKD is usually classified into five stages based on the level of
            kidney function, which is determined by the glomerular filtration
            rate (GFR) and the level of protein in the urine.
          </p>

          <p>
            Stage 1 is the mildest form of CKD, while stage 5 is the most severe
            and is often referred to as end-stage renal disease (ESRD). People
            with ESRD require dialysis or a kidney transplant to survive.
          </p>

          <p>
            Common causes of CKD include diabetes, high blood pressure, and
            other conditions that damage the kidneys over time. Early detection
            and treatment of CKD can help slow its progression and reduce the
            risk of complications.
          </p>

          <div className="alert alert-info">
            <p>
              <Link to="/health-analysis/chronic-kidney-disease">
                Click here
              </Link>{" "}
              to predict chronic kidney disease.
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <h3 id="blood_pressure">Blood Pressure </h3>
          <p>
            Blood pressure is an important factor to consider in chronic kidney
            disease (CKD) because it can contribute to the progression of the
            disease. High blood pressure damages the blood vessels in the
            kidneys, making them less effective in filtering waste products and
            excess fluid from the body. This can lead to a buildup of toxins in
            the bloodstream and cause further damage to the kidneys.
          </p>
          <p>
            People with CKD are often advised to monitor their blood pressure
            regularly and aim for a target blood pressure of less than 130/80
            mmHg.{" "}
          </p>
          <p>
            This can be achieved through lifestyle changes such as regular
            exercise, a healthy diet low in salt and saturated fats, and
            avoiding smoking and excessive alcohol consumption. Medications may
            also be prescribed to help control blood pressure.
          </p>
          <p>
            By controlling blood pressure, the progression of CKD can be slowed,
            and the risk of complications such as heart disease and stroke can
            be reduced.
          </p>

          <h3 className="mt-5" id="gravity">Specific Gravity</h3>
          <p>
            Specific gravity is a measure of how concentrated the urine is. In
            chronic kidney disease, the kidneys are not able to filter blood as
            effectively as they should, leading to a buildup of waste products
            in the body.
          </p>
          <p>
            As a result, the specific gravity of the urine may change, becoming
            either too high or too low.
          </p>
          <p>
            In the early stages of chronic kidney disease, the specific gravity
            of the urine may be normal. However, as the disease progresses and
            the kidneys become less efficient at filtering waste, the specific
            gravity may increase. This is because the kidneys are not able to
            remove as much water from the urine, making it more concentrated.
          </p>
          <p>
            In some cases, the specific gravity of the urine may actually
            decrease in chronic kidney disease. This can happen if the kidneys
            are damaged to the point where they are not able to concentrate the
            urine at all. This can lead to a condition known as "dilute urine."
          </p>
          <p>
            Monitoring the specific gravity of the urine is an important part of
            managing chronic kidney disease, as it can help doctors determine
            how well the kidneys are functioning.
          </p>

          <h3 className="mt-5" id="albumin">Albumin</h3>
          <p>
            Albumin is a protein made by the liver and is essential for
            maintaining fluid balance in the body. In chronic kidney disease
            (CKD), the kidneys may not be able to filter albumin effectively,
            leading to a buildup in the blood.
          </p>
          <p>
            The normal range for albumin in adults is between 3.5 to 5.5 g/dL.
            In CKD, the level of albumin in the blood can decrease, leading to a
            condition called hypoalbuminemia.
          </p>
          <p>The severity of hypoalbuminemia can be classified as follows:</p>
          <ol>
            <li>Mild hypoalbuminemia: albumin level between 3.0-3.4 g/dL</li>
            <li>
              Moderate hypoalbuminemia: albumin level between 2.0-2.9 g/dL
            </li>
            <li>Severe hypoalbuminemia: albumin level less than 2.0 g/dL</li>
          </ol>
          <p>
            Low albumin levels can be a sign of more advanced stages of CKD and
            are associated with an increased risk of complications, such as
            infections, cardiovascular disease, and mortality.
          </p>

          <h3 className="mt-5" id="sugar">Sugar</h3>
          <p>
            In Chronic Kidney Disease (CKD), sugar (glucose) may be present in
            the urine. Normally, the kidneys filter out excess glucose from the
            blood and excrete it in the urine. However, in CKD, the kidneys may
            not be able to do this properly, leading to glucose buildup in the
            bloodstream and urine.
          </p>
          <p>
            The presence of glucose in the urine is usually tested using a urine
            dipstick or a urine glucose test. The normal range for glucose in
            the urine is 0-0.8 mmol/L. In CKD, the range can vary depending on
            the severity of the disease and the individual case.
          </p>
          <p>
            It is important to note that the presence of glucose in the urine
            can also be a sign of diabetes, which is a risk factor for CKD.
            Therefore, if glucose is found in the urine, further testing may be
            needed to determine the underlying cause.
          </p>

          <h3 className="mt-5" id="red_blood_cells">Red Blood Cells</h3>
          <p>
            In chronic kidney disease, the kidneys are not able to function
            properly and this can lead to changes in the levels of red blood
            cells in the body. Red blood cells are responsible for carrying
            oxygen throughout the body.
          </p>
          <p>
            In chronic kidney disease, the levels of red blood cells can
            decrease, leading to a condition known as anemia. Anemia can cause
            fatigue, weakness, and shortness of breath. The decrease in red
            blood cells can be due to a decrease in the production of a hormone
            called erythropoietin, which is made in the kidneys.
          </p>
          <p>
            The normal range of red blood cells in adults is between 4.5 and 5.5
            million cells per microliter for men and between 4.0 and 5.0 million
            cells per microliter for women.
          </p>
          <p>
            In chronic kidney disease, the levels of red blood cells can
            decrease to less than 4.0 million cells per microliter for men and
            less than 3.5 million cells per microliter for women.
          </p>
          <p>
            It is important to monitor red blood cell levels in individuals with
            chronic kidney disease to prevent complications associated with
            anemia.
          </p>

          <h3 className="mt-5" id="pus_cell">Pus Cell</h3>
          <p>
            In chronic kidney disease (CKD), the level of pus cells (also called
            white blood cells) in the urine can indicate the presence of
            inflammation or infection in the urinary tract.
          </p>

          <p>
            Normally, urine should not contain any pus cells. However, in CKD,
            pus cells may be present due to damage to the kidneys or other parts
            of the urinary tract, which can cause inflammation and infection.
          </p>
          <p>
            The normal range for pus cells in urine is 0-5 cells per high power
            field (HPF).
          </p>
          <p>
            In CKD, the number of pus cells may increase to indicate the
            presence of infection or inflammation. Depending on the severity of
            the condition, the number of pus cells may range from 10-20 cells
            per HPF to as high as 50 or more cells per HPF.
          </p>
          <p>
            It is important to note that the presence of pus cells in the urine
            does not always indicate CKD, and other conditions such as urinary
            tract infections (UTIs) can also cause an increase in pus cells. A
            medical professional should be consulted for proper diagnosis and
            treatment.
          </p>

          <h3 className="mt-5" id="pus_cell_clumps">Pus Cell Clumps</h3>
          <p>
            Pus cell clumps refer to the clumping together of white blood cells,
            also known as pus cells, in urine. This can be a sign of kidney
            inflammation or infection, which can be a complication of chronic
            kidney disease.
          </p>
          <p>
            In terms of values, the presence of pus cell clumps in urine is
            usually reported as either "present" or "absent" on a urinalysis
            report. A positive result for pus cell clumps may indicate the need
            for further testing and evaluation by a healthcare provider.
          </p>

          <h3 className="mt-5" id="bacteria">Bacteria</h3>
          <p>
            Bacteria is not normally present in urine. Its presence in the urine
            is a sign of infection. In chronic kidney disease (CKD), the risk of
            developing a urinary tract infection (UTI) increases due to urinary
            stasis, which occurs when urine does not completely empty from the
            bladder.
          </p>

          <p>
            A urine culture is considered positive if there are more than
            100,000 colony-forming units (CFU) of bacteria per milliliter of
            urine. In CKD, the presence of bacteria in the urine is a cause for
            concern and may require treatment with antibiotics to prevent the
            infection from spreading to the kidneys.
          </p>

          <h3 className="mt-5" id="blood_glucose">Blood Glucose Random</h3>
          <p>
            Blood glucose random is a test that measures the level of glucose
            (sugar) in the blood at any given time, without the need for
            fasting. In chronic kidney disease, the blood glucose level may be
            affected due to impaired kidney function.
          </p>
          <p>
            The normal range for blood glucose random is between 70-140 mg/dL.
            However, in chronic kidney disease, the target blood glucose level
            may be different depending on the severity of the condition and the
            individual patient's needs.
          </p>
          <p>
            In general, a blood glucose level above 200 mg/dL may be a cause for
            concern in chronic kidney disease, as it may indicate poorly
            controlled diabetes or impaired kidney function. However, the target
            blood glucose level may vary depending on the individual's age,
            overall health status, and other factors.{" "}
          </p>
          <p>
            It's important for patients with chronic kidney disease to work
            closely with their healthcare provider to establish a target blood
            glucose level and monitor it regularly.
          </p>

          <h3 className="mt-5" id="blood_urea">Blood Urea</h3>
          <p>
            Blood urea is a laboratory test that measures the amount of urea
            nitrogen in the blood, which is a waste product generated during
            protein metabolism in the liver. In Chronic Kidney Disease (CKD),
            the kidneys are unable to filter waste products properly, which can
            lead to an increase in the blood urea levels.
          </p>
          <p>
            The normal range of blood urea is between 7 and 20 mg/dL (milligrams
            per deciliter) for adults, but in CKD, the levels can be higher.
            Depending on the stage of CKD, the blood urea levels may vary. For
            instance:
          </p>
          <ul>
            <li>Stage 1: 8-20 mg/dL</li>
            <li>Stage 2: 8-20 mg/dL</li>
            <li>Stage 3: 20-50 mg/dL</li>
            <li>Stage 4: 20-50 mg/dL</li>
            <li>Stage 5: 60-120 mg/dL</li>
          </ul>

          <h3 className="mt-5" id="serum_creatinine">Serum Creatinine</h3>
          <p>
            Serum creatinine is a waste product produced by muscles from the
            breakdown of a compound called creatine. It is normally removed from
            the blood by the kidneys and excreted in the urine. In chronic
            kidney disease, the kidneys are not functioning properly and cannot
            remove creatinine from the blood effectively, leading to elevated
            levels in the blood.
          </p>
          <p>
            The normal range of serum creatinine can vary depending on age,
            gender, and muscle mass, but generally, it is around 0.6-1.2 mg/dL
            for men and 0.5-1.1 mg/dL for women. In chronic kidney disease, the
            serum creatinine level may gradually increase as kidney function
            declines. The severity of chronic kidney disease can be classified
            based on the serum creatinine level and estimated glomerular
            filtration rate (eGFR), which takes into account the serum
            creatinine level, age, gender, and race.
          </p>

          <h3 className="mt-5" id="sodium">Sodium</h3>
          <p>
            Sodium is an important electrolyte in the body that helps regulate
            blood pressure and fluid balance. In chronic kidney disease (CKD),
            the kidneys may not be able to effectively remove excess sodium from
            the body, leading to high levels of sodium in the blood. This can
            cause a number of complications, including high blood pressure and
            fluid retention.
          </p>
          <p>
            The normal range of sodium in the blood is typically between 135-145
            milliequivalents per liter (mEq/L). In CKD, the sodium level may
            become elevated (hypernatremia), with levels above 145 mEq/L.
            However, sodium levels may also become low (hyponatremia) in
            advanced stages of CKD or in patients receiving certain treatments
            such as diuretics.
          </p>

          <h3 className="mt-5" id="potassium">Potassium</h3>
          <p>
            Potassium is an important electrolyte in the body that helps in
            various bodily functions, including nerve and muscle function, fluid
            balance, and blood pressure control. In chronic kidney disease, the
            kidneys may not be able to remove excess potassium effectively,
            which can lead to high potassium levels in the blood (hyperkalemia).
          </p>
          <p>
            The normal range for potassium in the blood is between 3.5 and 5.0
            millimoles per liter (mmol/L). In chronic kidney disease, potassium
            levels may increase, and the normal range may vary depending on the
            stage of the disease and the individual's treatment plan. Generally,
            a potassium level above 5.5 mmol/L is considered high and requires
            medical attention.{" "}
          </p>

          <h3 className="mt-5" id="hemoglobin">Hemoglobin</h3>
          <p>
            Hemoglobin is a protein in red blood cells that carries oxygen
            throughout the body. In chronic kidney disease, the kidneys are not
            able to produce enough erythropoietin, a hormone that stimulates the
            production of red blood cells, leading to a decrease in hemoglobin
            levels.
          </p>
          <p>
            The normal range for hemoglobin varies depending on age and gender,
            but in general, the normal range for adult males is 13.5-17.5 g/dL
            and for adult females is 12.0-15.5 g/dL. In chronic kidney disease,
            the hemoglobin levels may be lower than the normal range and may
            require treatment to improve the patient's quality of life.
          </p>

          <h3 className="mt-5" id="packed_cell_volume">Packed Cell Volume</h3>
          <p>
            Packed Cell Volume (PCV), also known as hematocrit, is a measure of
            the proportion of red blood cells in the blood. In Chronic Kidney
            Disease (CKD), the PCV may be affected due to various factors, such
            as anemia.
          </p>
          <p>
            The normal range of PCV is 36% to 46% for women and 41% to 53% for
            men. In CKD, the PCV levels may decrease due to the decreased
            production of erythropoietin, which is a hormone produced by the
            kidneys that stimulates the bone marrow to produce red blood cells.{" "}
          </p>

          <h3 className="mt-5" id="white_blood_cell_count">White Blood Cell Count</h3>
          <p>
            In chronic kidney disease, white blood cell count can vary depending
            on the underlying cause and other factors. The normal range of white
            blood cell count is between 4,000 and 11,000 cells per microliter of
            blood. However, in chronic kidney disease, white blood cell count
            may be elevated due to inflammation, infection, or other related
            conditions.
          </p>
          <p>
            If the white blood cell count is significantly elevated or
            decreased, it may indicate a need for further evaluation or
            treatment.
          </p>

          <h3 className="mt-5" id="red_blood_cell_count">Red Blood Cell Count</h3>
          <p>
            Red blood cell count, also known as erythrocyte count, is a measure
            of the number of red blood cells in a given volume of blood. In
            chronic kidney disease, the red blood cell count can be affected due
            to decreased production of erythropoietin, a hormone that stimulates
            the production of red blood cells.{" "}
          </p>
          <p>The normal range for red blood cell count is:</p>
          <ol>
            <li>For men: 4.7 to 6.1 million cells/mcL (microliter)</li>
            <li>For women: 4.2 to 5.4 million cells/mcL</li>
          </ol>
          <p>
            In chronic kidney disease, the red blood cell count may be lower
            than the normal range, indicating anemia. Anemia can lead to
            fatigue, weakness, and shortness of breath, among other symptoms.
          </p>

          <h3 className="mt-5" id="hypertension">Hypertension</h3>
          <p>
            Hypertension, or high blood pressure, is a common complication of
            chronic kidney disease (CKD). It can cause further damage to the
            kidneys and increase the risk of cardiovascular disease. The blood
            pressure target for patients with CKD varies depending on the stage
            of the disease and the presence of other health conditions.
          </p>
          <p>
            The recommended blood pressure target for patients with CKD is
            generally below 130/80 mmHg. However, in some cases, a higher blood
            pressure target may be appropriate. It is important to work with a
            healthcare provider to determine the appropriate blood pressure
            target and develop a treatment plan to achieve it.{" "}
          </p>

          <h3 className="mt-5" id="diabetes_mellitus">Diabetes Mellitus</h3>
          <p>
            Diabetes Mellitus is a medical condition characterized by high blood
            sugar levels due to the body's inability to produce or use insulin
            effectively. Chronic Kidney Disease (CKD) is a condition where the
            kidneys become damaged and cannot function properly. Diabetes
            Mellitus is a leading cause of CKD.
          </p>
          <p>
            In patients with CKD and Diabetes Mellitus, the following values
            ranges are typically observed:
          </p>
          <ol>
            <li>Fasting Blood Glucose: &lt;126 mg/dL</li>
            <li>Hemoglobin A1c: &lt;7%</li>
            <li>Blood Pressure: &lt;130/80 mmHg</li>
          </ol>

          <h3 className="mt-5" id="cad">Coronary Artery Disease (CAD)</h3>
          <p>
            Chronic Kidney Disease (CKD) can increase the risk of developing
            coronary artery disease (CAD), which is a condition where the blood
            vessels that supply the heart muscle with oxygen and nutrients
            become narrow or blocked.
          </p>
          <p>
            The values range that indicates the presence of CAD in CKD patients
            may vary depending on the specific diagnostic test or assessment
            used. Some common tests that can help diagnose CAD include:
          </p>
          <ol>
            <li>
              Electrocardiogram (ECG): This test measures the electrical
              activity of the heart and can detect abnormal heart rhythms or
              changes in the heart's structure due to CAD.
            </li>
            <li>
              Echocardiogram: This test uses ultrasound to create images of the
              heart and can show the size and shape of the heart's chambers, as
              well as how well the heart is pumping blood.
            </li>
            <li>
              Cardiac catheterization: This test involves inserting a thin tube
              into a blood vessel in the arm or groin and threading it up to the
              heart to look for blockages in the coronary arteries.
            </li>
          </ol>
          <p>Some common values range used in the diagnosis of CAD include:</p>
          <ol>
            <li>
              Electrocardiogram (ECG): The presence of ST-segment depression or
              T-wave inversion on the ECG may suggest CAD.
            </li>
            <li>
              Echocardiogram: An ejection fraction (EF) of less than 50% or the
              presence of wall motion abnormalities may indicate CAD.
            </li>
            <li>
              Cardiac catheterization: The presence of a blockage of 70% or more
              in any of the coronary arteries is usually considered significant
              and may require treatment with medications or procedures such as
              angioplasty or bypass surgery.
            </li>
          </ol>

          <h3 className="mt-5" id="appetite">Appetite</h3>
          <p>
            In chronic kidney disease (CKD), appetite can be affected due to
            various reasons such as high levels of waste products in the blood,
            hormonal imbalances, medications, and other factors. A common
            symptom of CKD is a loss of appetite, which can lead to malnutrition
            and weight loss.
          </p>
          <p>
            In terms of values, appetite is generally not measured
            quantitatively, but instead assessed subjectively through questions
            about the patient's appetite and food intake. Some scales used to
            assess appetite and nutritional status in CKD include the Subjective
            Global Assessment (SGA) and the Malnutrition Inflammation Score
            (MIS). These tools ask questions about appetite, food intake, and
            other factors to determine the severity of malnutrition and guide
            interventions to improve nutritional status.
          </p>

          <h3 className="mt-5" id="pedal_edema">Pedal Edema</h3>
          <p>
            Pedal edema is a condition where there is swelling in the feet and
            ankles due to the accumulation of fluid. In chronic kidney disease,
            it is a common symptom and can occur due to various reasons such as
            fluid overload, decreased urine output, and increased sodium
            retention.
          </p>
          <p>
            The severity of pedal edema can be graded on a scale of 0 to 4,
            where:
          </p>
          <ul>
            <li>Grade 0: No edema</li>
            <li>
              Grade 1: Slight indentation visible after pressure applied, with
              rapid refill
            </li>
            <li>Grade 2: Deeper indentation with slower refill</li>
            <li>Grade 3: Noticeable swelling of the leg</li>
            <li>Grade 4: Gross swelling with pitting, extends to the knees</li>
          </ul>
          <p>
            Patients with chronic kidney disease should consult their healthcare
            provider if they notice any symptoms of pedal edema or any other
            signs of fluid overload.
          </p>

          <h3 className="mt-5" id="anemia">Anemia</h3>
          <p>
            Anemia is a common complication in Chronic Kidney Disease (CKD) that
            occurs due to a decrease in the number of red blood cells or
            hemoglobin levels in the blood.
          </p>
          <p>
            It is typically diagnosed by measuring hemoglobin levels, which
            should be between 12-16 g/dL for women and 13-17 g/dL for men.
          </p>
          <p>
            In CKD, anemia can be caused by the kidneys' inability to produce
            enough erythropoietin, a hormone that stimulates the production of
            red blood cells. Anemia can also occur due to other factors such as
            blood loss during dialysis or the accumulation of toxic substances
            that interfere with red blood cell production.
          </p>
          <p>
            The severity of anemia in CKD is classified based on hemoglobin
            levels, as follows:
          </p>
          <ol>
            <li>Mild anemia: Hemoglobin levels between 10-12 g/dL</li>
            <li>Moderate anemia: Hemoglobin levels between 8-10 g/dL</li>
            <li>Severe anemia: Hemoglobin levels below 8 g/dL</li>
          </ol>
          <p>
            Anemia in CKD can cause symptoms such as fatigue, weakness,
            shortness of breath, and dizziness, which can affect the patient's
            quality of life. Treatment for anemia in CKD may involve medications
            such as erythropoietin-stimulating agents or iron supplements.
          </p>
        </div>
      </div>
    </div>
  );
}
