import Diagram from "../../../../assets/images/heart-disease.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function StudyHeartDisease() {
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
          <h1 className="font-bold">Heart Disease</h1>
          <p>
            Heart disease, also known as cardiovascular disease, refers to a
            group of conditions that affect the heart and blood vessels. These
            conditions can include coronary artery disease, heart failure,
            arrhythmias (irregular heartbeats), and valve disorders, among
            others.
          </p>

          <div className="row my-5">
            <div className="col-md-10 offset-md-1">
              <img className="img-fluid" src={Diagram} alt="" />
            </div>
          </div>

          <p>
            Heart disease is a major cause of illness and death worldwide, but
            many types of heart disease can be prevented or managed with
            lifestyle changes and medical treatment. Risk factors for heart
            disease include high blood pressure, high cholesterol, smoking,
            diabetes, obesity, and a family history of heart disease.
          </p>
          <p>
            Symptoms of heart disease can vary depending on the specific
            condition, but may include chest pain, shortness of breath, fatigue,
            and swelling in the legs or ankles.
          </p>

          <p className="alert alert-info">
            <Link to="/health-analysis/heart-disease">Click here</Link> to
            predict heart disease.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h3 className="mt-5" id="chest_pain_type">Chest Pain Type </h3>
          <p>
            Chest pain type is one of the features that can be used to diagnose
            heart disease. There are four types of chest pain that are
            associated with heart disease:
          </p>
          <ol>
            <li>
              <strong>Typical angina:</strong>
              This type of chest pain is usually described as a feeling of
              pressure or tightness in the chest. It can also be accompanied by
              shortness of breath, sweating, and nausea.
            </li>
            <li>
              <strong>Atypical angina:</strong>
              This type of chest pain is less severe than typical angina and may
              be described as a burning or indigestion-like feeling. It can also
              be accompanied by shortness of breath, sweating, and nausea.
            </li>
            <li>
              <strong>Non-anginal pain:</strong>
              This type of chest pain is not caused by a lack of blood flow to
              the heart and may be due to other causes, such as acid reflux or
              muscle strain.
            </li>
            <li>
              <strong>Asymptomatic:</strong>
              Some people with heart disease may not experience any chest pain
              or other symptoms, which can make it difficult to diagnose.
            </li>
          </ol>
          <p>
            <strong>Note: </strong>
            It's important to note that chest pain can have many causes, and not
            all chest pain is related to heart disease. If you're experiencing
            chest pain or other symptoms, it's important to seek medical
            attention right away.
          </p>

          <h3 className="mt-5" id="rbp">Resting Blood Pressure (RBP)</h3>
          <p>
            Resting Blood Pressure (RBP) is the pressure of blood on the walls
            of arteries during the resting phase of the cardiac cycle. In the
            context of heart disease, RBP is an important indicator of the
            cardiovascular health of an individual
          </p>
          <p>
            It is measured in millimeters of mercury (mmHg) and is represented
            as two numbers, systolic and diastolic, separated by a slash.
            Systolic blood pressure (SBP) is the pressure in the arteries when
            the heart beats, while diastolic blood pressure (DBP) is the
            pressure when the heart is at rest between beats.{" "}
          </p>
          <p>
            A normal RBP reading is generally considered to be below 120/80
            mmHg. High RBP can indicate hypertension or other cardiovascular
            problems.
          </p>

          <h3 className="mt-5" id="serum_cholestoral">Serum Cholestoral</h3>
          <p>
            Serum cholesterol is a type of fat found in the blood. In the
            context of heart disease, high levels of serum cholesterol are
            associated with an increased risk of developing heart disease and
            other cardiovascular problems. Elevated levels of serum cholesterol
            can lead to the formation of plaques in the arteries, which can
            reduce blood flow to the heart and other organs.
          </p>
          <p>
            To manage heart disease, doctors often recommend monitoring serum
            cholesterol levels and taking steps to reduce levels if they are too
            high. This may involve lifestyle changes such as adopting a healthy
            diet and exercising regularly, as well as medication to lower
            cholesterol levels.{" "}
          </p>

          <h3 className="mt-5" id="fbs">Fasting Blood Sugar</h3>
          <p>
            Fasting blood sugar is the level of glucose in the blood after a
            period of fasting, usually for at least 8 hours. In the context of
            heart disease, fasting blood sugar levels can be an important
            indicator of a person's risk of developing heart disease.{" "}
          </p>
          <p>
            High levels of fasting blood sugar are associated with an increased
            risk of developing diabetes, which in turn can increase the risk of
            heart disease.
          </p>
          <p>
            It is recommended that fasting blood sugar levels be kept below 100
            mg/dL to reduce the risk of heart disease.
          </p>

          <h3 className="mt-5" id="ecg">Resting Electrocardiographic (ECG)</h3>
          <p>
            Resting Electrocardiographic (ECG) in heart disease refers to the
            electrical activity of the heart recorded while the patient is at
            rest. It is a non-invasive test that can help diagnose various heart
            conditions, such as arrhythmias, heart attacks, and abnormalities in
            the heart's structure.
          </p>
          <p>
            There are three types of resting ECG that are commonly observed in
            heart disease:
          </p>
          <ol>
            <li>
              <strong>Normal:</strong>A normal ECG shows a regular heartbeat,
              with consistent intervals between heartbeats and a consistent
              pattern of electrical activity.
            </li>
            <li>
              <strong>ST-T wave abnormality:</strong>
              This ECG pattern shows a deviation from the normal pattern of the
              ST segment and T wave, indicating possible myocardial ischemia
              (reduced blood flow to the heart muscle).
            </li>
            <li>
              <strong>Left ventricular hypertrophy:</strong>
              This ECG pattern shows increased voltage or amplitude of the QRS
              complex, which indicates an enlarged left ventricle of the heart,
              which can occur due to conditions like hypertension, aortic
              stenosis or cardiomyopathy.
            </li>
          </ol>

          <h3 className="mt-5" id="mhr">Maximum Heart Rate </h3>
          <p>
            In heart disease, Maximum Heart Rate (also known as Maximum Heart
            Rate Achieved) refers to the highest number of times the heart beats
            per minute during physical activity or exercise. It is an important
            measure as it helps to determine a person's cardiovascular fitness
            level and the intensity of exercise that they can safely undertake.
          </p>
          <p>
            The average Maximum Heart Rate varies based on a person's age and
            fitness level, with younger individuals typically having a higher
            Maximum Heart Rate.
          </p>
          <p>
            A general estimate for Maximum Heart Rate can be calculated by
            subtracting a person's age from 220. For example, the Maximum Heart
            Rate for a 30-year-old would be approximately 190 beats per minute
            (220 - 30).
          </p>

          <h3 className="mt-5" id="eia">Exercise Induced Angina</h3>
          <p>
            Exercise-induced angina is a symptom of heart disease characterized
            by chest pain or discomfort that occurs during physical activity or
            exertion.
          </p>
          <p>
            It is caused by reduced blood flow to the heart muscle due to
            narrowed or blocked arteries, which can result in an insufficient
            supply of oxygen and nutrients to the heart. When the heart is under
            stress during exercise, it requires more oxygen and if the blood
            flow is restricted, it can cause pain or discomfort.{" "}
          </p>
          <p>
            Exercise-induced angina can be a warning sign of underlying heart
            disease and should be evaluated by a doctor.
          </p>

          <h3 className="mt-5" id="old_peak">Old Peak</h3>
          <p>
            Old Peak is a term used to describe a decrease in ST segment during
            exercise compared to baseline, as measured by an electrocardiogram
            (ECG).
          </p>
          <p>
            In other words, it refers to the difference between the highest
            point of the ST segment during exercise and the baseline level. Old
            Peak is considered to be a marker of ischemia, which is a condition
            where the blood supply to the heart is reduced, usually due to a
            narrowing or blockage of the coronary arteries.
          </p>

          <h3 className="mt-5" id="slope">Slope</h3>
          <p>
            the slope refers to the slope of the ST segment on an
            electrocardiogram (ECG). The ST segment is a part of the ECG that
            represents the interval between ventricular depolarization and
            repolarization. The slope of the ST segment can provide information
            about the blood supply to the heart and the presence of coronary
            artery disease.
          </p>
          <p>
            There are three types of slopes: upsloping, downsloping, and flat.
          </p>
          <ol>
            <li>
              <p>
                <strong>Upsloping: </strong>
                Upsloping means that the ST segment is sloping upward from the
                baseline.
              </p>
            </li>
            <li>
              <p>
                <strong>Downsloping: </strong>
                Downsloping means that the ST segment is sloping downward from
                the baseline.
              </p>
            </li>
            <li>
              <p>
                <strong>Flat: </strong>
                Flat means that the ST segment is horizontal or close to the
                baseline.
              </p>
            </li>
          </ol>
          <p className="mt-4 alert alert-info">
            <strong>Note: </strong>
            <br />
            Upsloping and flat slopes are generally considered non-specific,
            while downsloping slopes are associated with a higher risk of
            coronary artery disease.
          </p>

          <h3 className="mt-5" id="major_vassels">Number of Major Vessels</h3>
          <p>
            Number of Major Vessels typically refers to the number of major
            blood vessels that supply the heart muscle with blood. These vessels
            are known as coronary arteries.
          </p>
          <p>
            In a healthy individual, there are usually three main coronary
            arteries, but sometimes one or more of these arteries may be
            narrowed or blocked due to a build-up of plaque, a condition known
            as coronary artery disease.
          </p>

          <h3 className="mt-5" id="thal">Thal</h3>
          <p>
            Thal or Thalassemia is a genetic blood disorder that affects the
            production of hemoglobin in the body. In heart disease, Thal refers
            to a specific type of thalassemia that can be detected through blood
            tests.
          </p>
        </div>
      </div>
    </div>
  );
}
