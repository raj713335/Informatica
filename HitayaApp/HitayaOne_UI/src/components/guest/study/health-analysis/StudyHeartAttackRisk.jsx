import Diagram from "../../../../assets/images/heart-attack-risk-factors.jpg";
import { Link } from "react-router-dom";

export default function StudyHeartAttackDisease() {
  return (
    <div className="mt-4 mb-5 container animated fadeInRight">
      <div className="row">
        <div className="col-md-8">
          <h1 className="font-bold">Heart Attack Risk</h1>
          <p>
            Heart attack risk refers to the likelihood of experiencing a heart
            attack, which occurs when blood flow to the heart is blocked,
            typically by a buildup of plaque in the arteries.
          </p>

          <div className="row my-4">
            <div className="col-md-8 offset-md-2">
              <img className="img-fluid" src={Diagram} alt="" />
            </div>
          </div>

          <p>
            Several factors can contribute to an increased risk of heart attack,
            including high blood pressure, high cholesterol, smoking, obesity,
            family history of heart disease, age, and a sedentary lifestyle. By
            identifying and managing these risk factors, individuals can reduce
            their risk of experiencing a heart attack and improve their overall
            heart health.
          </p>

          <p className="my-4 alert alert-info">
            <Link to="/health-analysis/heart-attack-risk-predictor">
              Click here
            </Link>{" "}
            to check if you have any risk for heart attack. section.
          </p>

          <h3 className="mt-5">Diastolic BP </h3>
          <p>
            Diastolic blood pressure (DBP) is the pressure in the arteries when
            the heart is relaxed and filling with blood, between contractions or
            heartbeats. It is usually the second (lower) number in a blood
            pressure reading and is measured in millimeters of mercury (mmHg).
          </p>
          <p>
            A normal range for diastolic blood pressure is typically considered
            to be between 60 and 80 mmHg.
          </p>
          <p>
            High diastolic blood pressure, also known as diastolic hypertension,
            occurs when the diastolic reading is consistently above 80 mmHg,
            which can increase the risk of cardiovascular disease, stroke, and
            other health complications.
          </p>

          <h3 className="mt-5">Red Blood Cells</h3>
          <p>
            Red blood cells, also known as erythrocytes, are cells in the blood
            that carry oxygen from the lungs to the body's tissues and transport
            carbon dioxide from the tissues to the lungs for exhalation. They
            get their red color from a protein called hemoglobin, which binds to
            oxygen and gives the cells their ability to carry it.
          </p>
          <p>
            Red blood cells are made in the bone marrow and have a lifespan of
            about 120 days before they are broken down and replaced.
          </p>

          <h3 className="mt-5">Sedimantation Rate</h3>
          <p>
            Sedimentation rate, also known as erythrocyte sedimentation rate
            (ESR), is a blood test that measures the rate at which red blood
            cells settle to the bottom of a tube in a specified amount of time.
          </p>
          <p>
            In the context of heart attack risk, an elevated ESR may indicate
            the presence of inflammation in the body, which can be a risk factor
            for developing heart disease. Inflammation can cause damage to the
            inner lining of blood vessels, leading to the formation of plaque
            and increasing the risk of a heart attack.
          </p>

          <h3 className="mt-5">Serum Albumin</h3>
          <p>
            Serum albumin is a protein made by the liver and is an important
            component of the blood. In the context of heart attack risk, low
            levels of serum albumin have been associated with an increased risk
            of cardiovascular disease.{" "}
          </p>

          <h3 className="mt-5">Serum Cholesterol</h3>
          <p>
            Serum cholesterol is a measurement of the amount of cholesterol in
            the blood. High levels of serum cholesterol can increase the risk of
            developing heart disease, including heart attacks. Cholesterol can
            build up in the walls of arteries, narrowing them and restricting
            blood flow to the heart, which can lead to a heart attack.
          </p>
          <p>
            Therefore, monitoring serum cholesterol levels and taking steps to
            keep them in a healthy range can help lower the risk of heart
            attack.
          </p>

          <h3 className="mt-5">Serum Iron </h3>
          <p>
            Serum iron is not considered a major risk factor for heart attack.
            However, high levels of serum iron can cause oxidative stress, which
            can damage blood vessels and increase the risk of developing
            cardiovascular diseases over time. Iron overload disorders such as
            hereditary hemochromatosis have been associated with an increased
            risk of heart attack, but this is not related to serum iron levels
            alone.
          </p>

          <h3 className="mt-5">Serum Magnesium</h3>
          <p>
            There is some evidence that low levels of serum magnesium may
            increase the risk of heart disease. Magnesium plays an important
            role in regulating heart function, blood pressure, and glucose
            metabolism.
          </p>
          <p>
            Low magnesium levels may contribute to high blood pressure, insulin
            resistance, and inflammation, all of which are risk factors for
            heart disease.
          </p>

          <h3 className="mt-5">Serum Protein</h3>
          <p>
            Serum protein refers to the total amount of protein found in the
            blood serum. It includes different types of proteins such as
            albumin, globulins, and fibrinogen.{" "}
          </p>
          <p>
            The level of serum protein can be measured through a blood test and
            is an important indicator of overall health.{" "}
          </p>

          <h3 className="mt-5">Systolic BP</h3>
          <p>
            Systolic blood pressure (SBP) is the pressure exerted by blood
            against the walls of arteries when the heart contracts and pumps
            blood out. It is the top number in a blood pressure reading and is
            measured in millimeters of mercury (mm Hg).{" "}
          </p>
          <p>
            A normal range for SBP is considered to be below 120 mm Hg. High SBP
            is a risk factor for many health conditions, including heart
            disease, stroke, and kidney disease.
          </p>

          <h3 className="mt-5">Total Iron Binding Capacity (TIBC)</h3>
          <p>
            Total Iron Binding Capacity (TIBC) is a blood test that measures the
            blood's ability to bind iron with transferrin, a protein that
            transports iron in the blood. TIBC can provide useful information
            about the body's iron status, including the risk of iron deficiency
            anemia.{" "}
          </p>

          <h3 className="mt-5">TS</h3>
          <p>
            TS stands for Transferrin Saturation, which is a laboratory value
            that measures the amount of iron bound to transferrin in the blood.
            Transferrin is a protein that binds to iron and transports it
            through the bloodstream to the bone marrow, where it is used in the
            production of new red blood cells.
          </p>

          <h3 className="mt-5">White Blood Cells</h3>
          <p>
            White blood cells, also known as leukocytes, are a type of blood
            cell that is responsible for protecting the body against infections
            and diseases. They are an important part of the immune system and
            are produced in the bone marrow.{" "}
          </p>
          <p>
            The normal range of white blood cells in the blood is typically
            between 4,000 and 11,000 cells per microliter. High or low levels of
            white blood cells can indicate a variety of medical conditions,
            including infections, autoimmune diseases, and cancers.
          </p>

          <h3 className="mt-5">BMI</h3>
          <p>
            Body Mass Index (BMI) is a measure of body fat based on height and
            weight. It is commonly used to determine whether someone is
            underweight, normal weight, overweight, or obese. BMI is calculated
            by dividing a person's weight in kilograms by their height in meters
            squared.
          </p>
          <p>
            Studies have shown that a higher BMI is associated with an increased
            risk of heart attack, as well as other health conditions such as
            diabetes and high blood pressure.
          </p>

          <h3 className="mt-5">Pulse Pressure</h3>
          <p>
            Pulse pressure is the difference between systolic and diastolic
            blood pressure.
          </p>
          <p>
            Elevated pulse pressure can be a risk factor for heart disease,
            especially in individuals over the age of 50. A high pulse pressure
            can indicate stiff arteries or increased resistance to blood flow,
            which can put a strain on the heart and increase the risk of heart
            attack and other cardiovascular events.
          </p>
        </div>
      </div>
    </div>
  );
}
