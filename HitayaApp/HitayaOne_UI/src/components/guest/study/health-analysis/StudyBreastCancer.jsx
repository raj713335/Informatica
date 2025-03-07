import { Link } from "react-router-dom";
import { useEffect } from "react";

import FemaleBreastDiagram from "../../../../assets/images/female-breast-diagram-750px.jpg";

export default function StudyBreastCancer() {
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
      <h1 className="font-bold">Breast Cancer</h1>
      <div className="row">
        <div className="col-md-7 text-muted">
          <p className="mt-2">
            Breast cancer is a disease in which cells in the breast grow out of
            control.
          </p>
          <p>
            There are different kinds of breast cancer. The kind of breast
            cancer depends on which cells in the breast turn into cancer.
          </p>

          <div className="alert alert-info my-4">
            <p className="mb-0">
              Breast cancer can begin in different parts of the breast.
            </p>
            <p>
              There are certain medical parameters which will define whether the
              female individual is affected with breast cancer.
            </p>
            <p>
              <Link to="/health-analysis/breast-cancer-prediction">
                Click here
              </Link>{" "}
              to predict breast cancer.
            </p>
          </div>

          <h5>A breast is made up of three main parts:</h5>
          <ul>
            <li className="my-2">
              <strong>Lobules:</strong> glands that produce milk.
            </li>
            <li className="my-2">
              <strong>Ducts:</strong> tubes that carry milk to the nipple.
            </li>
            <li className="my-2">
              <strong>Connective tissue:</strong> consists of fibrous and fatty
              tissue that surrounds and holds everything together.
            </li>
          </ul>
          <p>
            Most breast cancers begin in the ducts or lobules. It can spread
            outside the breast through blood vessels and lymph vessels. When it
            spreads to other parts of the body, it is said to have{" "}
            <strong>metastasized</strong>.
          </p>
        </div>
        <div className="col-md-5">
          <img className="img-fluid" src={FemaleBreastDiagram} alt="" />
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <h3 className="mt-4" id="radius_mean">Radius Mean</h3>
          <p>It's mean of distances from center to points on the perimeter.</p>
          <p>
            Range of redius mean from approximately 6.98 mm to 28.11 mm, with a
            median value of 13.37 mm, However Average mean radius of benign cell
            nuclei is 12.15 while that of malignant nuclei is 17.46.
          </p>

          <h3 className="mt-4" id="texture_mean">Texture Mean</h3>
          <p>
            In breast cancer, texture refers to the pattern and distribution of
            the different types of tissues and cells within a tumor, as seen on
            imaging tests like mammograms and ultrasounds. When we talk about
            texture mean, we are referring to the average value of the
            gray-scale levels of the pixels within a region of interest in the
            image. This can help to quantify the degree of uniformity or
            heterogeneity in the texture of the tumor.
          </p>
          <p>
            For example, if the texture mean is high, it means that there is a
            lot of variability in the density and arrangement of the cells
            within the tumor, which may be a sign of a more aggressive or
            advanced cancer. On the other hand, if the texture mean is low, it
            suggests that the cells within the tumor are more uniform in
            appearance and may be indicative of a less aggressive cancer.
          </p>
          <p>
            Overall, the texture mean is one of many factors that doctors use to
            help diagnose and stage breast cancer, and to guide treatment
            decisions. However, it is important to note that the interpretation
            of texture analysis results requires expertise and should always be
            done in the context of other clinical information and imaging
            findings.
          </p>
          <p>
            The range of texture mean values is approximately 9.71 to 39.28.
            However the average value of texture mean is approximately 19.29.
          </p>

          <h3 className="mt-4" id="perimeter_mean">Perimeter mean</h3>
          <p>
            Perimeter mean in breast cancer refers to the average length of the
            tumor boundary in an imaging test.
          </p>
          <p>
            A high perimeter mean suggests an irregular and complex tumor shape,
            which is often associated with a more aggressive form of breast
            cancer, while a low perimeter mean suggests a more regular and
            smooth shape, which may indicate a less aggressive cancer. This is
            one of many factors that doctors use to help diagnose and stage
            breast cancer, and to guide treatment decisions.
          </p>
          <p>
            The range of perimeter mean values is approximately 43.79 to 188.5,
            However the average value of perimeter mean is approximately 91.97
            mm.
          </p>

          <h3 className="mt-4" id="area_mean">Area Mean</h3>
          <p>
            Area mean in breast cancer refers to the average size of malignant
            cells within a tumor, as seen on imaging tests like mammograms and
            ultrasounds. A high area mean indicates larger and potentially more
            aggressive cancer cells, while a low area mean suggests smaller and
            potentially less aggressive cancer cells. Area mean is one of many
            factors doctors use to help diagnose and stage breast cancer and
            make treatment decisions. It's important to interpret area mean
            results in the context of other clinical information and imaging
            findings, and your doctor can help you understand what your
            individual results mean.
          </p>
          <p>
            The range of area mean values is approximately 143.5 to 2501.0
            square units. However the average value of area mean is
            approximately 654.89 square units.
          </p>

          <h3 className="mt-4" id="smothness_mean">Smoothness Mean</h3>
          <p>
            In breast cancer, smoothness mean refers to the average smoothness
            of the boundary of the tumor as seen on imaging tests like
            mammograms and ultrasounds.
          </p>
          <p>
            The values of smoothness mean typically range from 0 to 1, with
            higher values indicating a smoother and more regular boundary of the
            tumor, and lower values indicating a more irregular and jagged
            boundary.
          </p>
          <p>
            The range of smoothness mean values is approximately 0.71 to 0.163.
            However the average value of smoothness mean is approximately 0.096.
          </p>

          <h3 className="mt-4" id="compactness_mean">Compactness Mean</h3>
          <p>
            Compactness mean in breast cancer refers to the measure of how
            closely the tissue in the breast is packed together. A high
            compactness mean value can indicate that the tissue is more dense
            and potentially more suspicious for cancer, while a lower value can
            suggest that the tissue is less dense and potentially less
            concerning.
          </p>
          <p>
            the range of compactness mean values is approximately 0.019 to
            0.345. However the average value of compactness mean is
            approximately 0.104.
          </p>

          <h3 className="mt-4" id="concavity_mean">Concavity Mean</h3>
          <p>
            Concavity mean in breast cancer refers to the measure of the amount
            of concavity or indentation present in the boundary of the tumor or
            mass. A high concavity mean value can indicate that the boundary of
            the tumor or mass is more irregular and potentially more suspicious
            for cancer, while a lower value can suggest that the boundary is
            smoother and potentially less concerning.
          </p>
          <p>
            the range of concavity mean values is approximately 0 to 0.427.
            However the average value of concavity mean is approximately 0.046.
          </p>

          <h3 className="mt-4" id="concave_points_means">Concave Points Mean</h3>
          <p>
            Concave points mean in breast cancer refers to the average number of
            concave regions or "dips" present in the boundary of the tumor or
            mass. A high concave points mean value can indicate that the
            boundary of the tumor or mass has more concave regions and is
            potentially more suspicious for cancer, while a lower value can
            suggest that the boundary is smoother and potentially less
            concerning.
          </p>
          <p>
            the range of values for concave points mean is approximately 0 to
            0.152. However the mean value of concave points mean is
            approximately 0.048.
          </p>

          <h3 className="mt-4" id="symmetry_mean">Symmetry Mean</h3>
          <p>
            Symmetry mean in breast cancer refers to the degree of symmetry in
            the shape and size of cells within a breast tissue sample. In
            healthy breast tissue, cells tend to be fairly uniform in size and
            shape, resulting in a higher symmetry mean value.
          </p>
          <p>
            However, cancer cells can often be irregular in size and shape,
            which can lead to a lower symmetry mean value. As such, symmetry
            mean is one of many factors that can be used to help diagnose and
            assess the severity of breast cancer.
          </p>
          <p>
            {" "}
            the range of values for symmetry mean is approximately 0.106 to
            0.304. However the average value for symmetry mean is approximately
            0.181.
          </p>

          <h3 className="mt-4" id="fractal_dimension_mean">Fractal Dimension Mean</h3>
          <p>
            Fractal dimension mean in breast cancer refers to a measure of the
            complexity of the boundary of the cells within a breast tissue
            sample. In healthy breast tissue, cells tend to have a smooth and
            regular boundary, resulting in a lower fractal dimension mean value.
          </p>
          <p>
            However, cancer cells can often have a more irregular and complex
            boundary, resulting in a higher fractal dimension mean value. As
            such, fractal dimension mean is one of many factors that can be used
            to help diagnose and assess the severity of breast cancer.
          </p>
          <p>
            {" "}
            the range of values for Fractal Dimension mean is approximately 0.05
            to 0.08. However the average value around 0.05-0.06.
          </p>
        </div>
      </div>

      <hr />
      <div className="row">
        <div className="col-md-8">
          <h3 className="mt-4" id="redius_se">Radius SE</h3>
          <p>
            The "Radius SE" in breast cancer refers to the standard error of the
            mean of the distances from the center to points on the perimeter of
            a detected mass or tumor in the breast. This measurement is one of
            several that can be used to assess the size and shape of the mass,
            which can help in the diagnosis and treatment of breast cancer.
          </p>
          <p>
            The range of values for Radius SE is approximately 0.11 to 0.30.
            However the average value typically around 0.25.
          </p>

          <h3 className="mt-4" id="texture_se">Texture SE</h3>
          <p>
            Texture SE, or Texture Standard Error, is a measure of the variation
            in texture values within the area of a breast mass or tumor. This is
            typically calculated as the standard error of the texture values
            within the region of interest. A higher value of Texture SE may
            indicate a greater degree of variation in the texture features of
            the tumor, and may be associated with a higher risk of malignancy.
          </p>
          <p>
            The range of values for Texture SE is typically between 0.360 and
            4.885.
          </p>

          <h3 className="mt-4" id="perimeter_se">Perimeter SE</h3>
          <p>
            In breast cancer, Perimeter SE refers to the standard error of the
            measurements of the perimeter of cell nuclei. It is an indication of
            the variability or precision of the measurements. A higher value of
            Perimeter SE indicates higher variability in the measurements, while
            a lower value indicates more consistency.
          </p>
          <p>
            The range of values for Radius SE is approximately 0.76 to 4.88
            (measured in microns). However the average value approximately 2.866
            +/- 2.021.
          </p>

          <h3 className="mt-4" id="area_se">Area SE</h3>
          <p>
            In breast cancer, Area SE refers to the standard error of the mean
            of the cross-sectional area of the cells detected in a biopsy. It is
            a measure of the variability of the area measurements within a
            particular sample. A higher value of Area SE indicates that the area
            measurements are more spread out and less consistent, while a lower
            value indicates that the area measurements are more tightly
            clustered around the mean.
          </p>
          <p>
            The values for Area SE in breast cancer typically range from around
            6.8 to 542.2 square units, with most values falling in the range of
            20 to 60 square units. In general it is around 40-50 square microns.
          </p>

          <h3 className="mt-4" id="smoothness_se">Smoothness SE</h3>
          <p>
            Smoothness SE in breast cancer refers to the standard error of the
            mean of the smoothness values for the cells in a breast cancer
            sample. It indicates the variability of smoothness values among
            different areas of the same breast tissue sample. A higher value of
            smoothness SE suggests a greater variability among the smoothness
            values, which could be an indication of more aggressive or abnormal
            cell growth. On the other hand, a lower value of smoothness SE
            suggests a more consistent or uniform smoothness pattern, which
            could be an indication of healthier cell growth.
          </p>
          <p>
            The range of values for Smoothness SE in breast cancer is between
            0.001713 and 0.03113, as seen in the dataset.
          </p>

          <h3 className="mt-4" id="compactness_se">Compactness SE</h3>
          <p>
            In breast cancer, Compactness SE refers to the standard error of the
            mean of the distribution of the local variation in shape of the cell
            nuclei. It represents the smoothness of the boundary of the cell
            nucleus.
          </p>
          <p>
            The range of Compactness SE (standard error) in breast cancer is
            from approximately 0.002 to 0.135, depending on the dataset and
            units of measurement. The average value of the Compactness SE in
            breast cancer is 0.025478.
          </p>

          <h3 className="mt-4" id="concavity_se">Concavity SE</h3>
          <p>
            In breast cancer analysis, "Concavity SE" refers to the standard
            error of the mean for the severity of concavity in cell nuclei. This
            measures the variation in the concavity values for the nuclei within
            a given sample. It is an important factor in determining the
            reliability of the measured concavity values.
          </p>
          <p>
            {" "}
            The values range between 0 and 0.4, with some datasets having values
            up to 1.0
          </p>

          <h3 className="mt-4" id="concave_points_se">Concave Points SE</h3>
          <p>
            In breast cancer, the Concave Points SE refers to the standard error
            of the mean for the local concavity of the contour lines detected in
            the grayscale image of a fine needle aspirate (FNA) of a breast
            mass. It represents the variation in the concave points of the cell
            nuclei within a particular FNA sample. A higher value of concave
            points SE indicates greater variability in the concavity of the
            contour lines detected in the image.
          </p>
          <p>
            The range of values for Concave Points SE (standard error) in breast
            cancer is between 0.00097 and 0.03832.
          </p>

          <h3 className="mt-4" id="symmetry_se">Symmetry SE</h3>
          <p>
            Symmetry SE (Standard Error) is a measure of the variation of the
            symmetry values of cells in a biopsy sample. A higher value
            indicates greater variation in the symmetry of the cells. It is
            calculated as the standard deviation of the symmetry values divided
            by the square root of the number of cells in the sample. The values
            of Symmetry SE in breast cancer dataset range from 0.007882 to
            0.07895.
          </p>
          <p>
            {" "}
            the range of values for Radius SE is approximately 0.76 to 4.88
            (measured in microns). However the average value approximately 2.866
            +/- 2.021.
          </p>

          <h3 className="mt-4" id="fractal_dimention_se">Fractal Dimension SE</h3>
          <p>
            Fractal dimension SE refers to the standard error of the mean of the
            "fractal dimension" feature, which is a measure of the complexity of
            the tumor. The fractal dimension is a mathematical concept that
            characterizes the degree of self-similarity of a complex structure.
            In the context of breast cancer, it is used to quantify the
            irregularity of the tumor boundary.
          </p>
          <p>
            The fractal dimension SE is a statistical measure that indicates how
            much the fractal dimension values in a sample of tumors vary from
            the mean value. A high SE value indicates that the fractal dimension
            values are widely dispersed, while a low SE value indicates that the
            fractal dimension values are tightly clustered around the mean
            value.
          </p>
          <p>
            In summary, the fractal dimension SE is a measure of the variability
            in the fractal dimension feature among different tumors in a
            dataset.
          </p>
          <p>
            The range of Fractal Dimension SE (standard error) in breast cancer
            data is 0.00089 to 0.0265.
          </p>

          <h3 className="mt-4" id="radius_worst">Radius Worst</h3>
          <p>
          Radius Worst refers to the largest value of the mean radius of a 
          tumor's cells detected in breast cancer. It represents the largest 
          distance from the center to the outer edge of the tumor. 
          The values range of Radius Worst typically depends on the dataset
          being used and the measurement units. However, in general, the range 
          can be between 6 mm to 40 mm.
          </p>
          <p>
          It's important to note that the values of Radius Worst alone may not 
          provide a definitive diagnosis of breast cancer. 
          It is usually considered in conjunction with other clinical factors,
           imaging tests, and additional diagnostic criteria.
          </p>
         {/* --------------- */}

         <h3 className="mt-4" id="texture_worst">Texture Worst</h3>
          <p>
          Texture Worst in breast cancer refers to the standard deviation of 
          gray-scale values in the texture of the worst-performing area of the tumor.
           It quantifies the variation in pixel intensity within the tumor region. 
          Higher values of Texture Worst indicate greater heterogeneity or 
          irregularity in the texture pattern.
          </p>
          <p>
          The values range of Texture Worst can vary depending on the dataset 
          and the measurement units used. However, in general, the range can be 
          between 10 and 40, where a higher value indicates more pronounced 
          textural variations.
          </p>
          <p>
          It's important to note that Texture Worst is just one of several 
          factors considered in diagnosing breast cancer. It is typically 
          evaluated in conjunction with other clinical features, imaging results, 
          and diagnostic tests for a comprehensive assessment.
          </p>
          <h3 className="mt-4" id="perimeter_worst">Perimeter Worst</h3>
          <p>
          Perimeter Worst in breast cancer refers to the largest perimeter
           (circumference) of the tumor among all identified regions. 
           It measures the total length of the tumor boundary. 
           A higher value of Perimeter Worst indicates a larger tumor size.
          </p>
          <p>
          The values range of Perimeter Worst can vary depending on 
          the dataset and the measurement units used. However, 
          in general, the range can be between 50 and 200, where a higher
           value indicates a larger tumor perimeter.
          </p>
          <h3 className="mt-4" id="area_worst">Area Worst</h3>
          <p>
          Area Worst in breast cancer refers to the largest area of the 
          tumor among all identified regions. It represents the size of 
          the tumor in terms of the total area it occupies. 
          A higher value of Area Worst indicates a larger tumor size.
          </p>
          <p>
          The values range of Area Worst can vary depending on the dataset 
          and the measurement units used. However, in general, the range can be 
          between 200 and 2500 square units, where a higher value indicates 
          a larger tumor area.
          </p>
          <h3 className="mt-4" id="smoothness_worst">Smoothness Worst</h3>
          <p>
          Smoothness Worst in breast cancer refers to the variation in the 
          local radius lengths of the tumor's contour. 
          It represents the irregularity or smoothness of the tumor's surface. 
          A higher value of Smoothness Worst indicates a more irregular and 
          less smooth tumor surface.
          </p>
          <p>
          The values range of Smoothness Worst can vary depending on the dataset 
          and the measurement units used. However, in general, the range can be 
          between 0.05 and 0.3, where a higher value indicates a more irregular 
          tumor surface.
          </p>
          <h3 className="mt-4" id="compactness_worst">Compactness Worst</h3>
          <p>
          Compactness Worst in breast cancer refers to the ratio of 
          the perimeter squared to the area of the tumor mass. 
          It represents the compactness or density of the tumor. 
          A higher value of Compactness Worst indicates a more compact and 
          dense tumor.
          </p>
          <p>
          The values range of Compactness Worst can vary depending on the dataset 
          and the measurement units used. However, in general, the range can be 
          between 0.02 and 0.35, where a higher value indicates a more compact and 
          dense tumor.
          </p>
          <h3 className="mt-4" id="concavity_worst">Concavity Worst</h3>
          <p>
          Concavity Worst in breast cancer refers to the severity
           of concave portions or depressions in the contour of the tumor mass. 
          It measures the extent of concavity or irregularity in the tumor's shape. 
          A higher value of Concavity Worst indicates a greater degree of 
          concavity or irregularity.
          </p>
          <p>
          The values range of Concavity Worst can vary depending on the dataset 
          and the measurement units used. However, in general, the range can be 
          between 0.01 and 0.4, where a higher value indicates a greater degree of
           concavity or irregularity in the tumor's shape.
          </p>
          <h3 className="mt-4" id="concave_points_worst">Concave Points Worst</h3>
          <p>
          Concave Points Worst in breast cancer refers to the number of 
          concave portions or points with the highest severity in the 
          contour of the tumor mass. It measures the presence and severity 
          of concave points within the tumor. A higher value of Concave Points 
          Worst indicates a greater number and severity of concave points.
          </p>
          <p>
          The values range of Concave Points Worst can vary depending on the 
          dataset and the measurement units used. However, in general, 
          the range can be between 0.0 and 0.2, where a higher value indicates a 
          greater number and severity of concave points within the tumor.
          </p>
          <h3 className="mt-4" id="symmetry_worst">Symmetry Worst</h3>
          <p>
          Symmetry Worst in breast cancer refers to the symmetry or 
          irregularity of the cells' shape and size in the worst or most 
          severe area of the tumor mass. It measures the deviation 
          rom perfect symmetry in the shape of the cells.
          </p>
          <p>
          The values range of Symmetry Worst can vary depending on the dataset 
          and the measurement units used. However, in general, the range can be 
          between 0.0 and 1.0, where a lower value indicates a more irregular and 
          asymmetric shape of the cells in the tumor.
          </p>
          <p>
          A higher value of Symmetry Worst indicates a closer approximation to 
          a symmetric shape, while a lower value suggests greater irregularity 
          and asymmetry. The assessment of symmetry helps in the evaluation of 
          the tumor's characteristics and can be used as a feature in diagnosing 
          and staging breast cancer.
          </p>
          <h3 className="mt-4" id="fractal_dimension_worst">Fractal Dimension Worst</h3>
          <p>
          Fractal Dimension Worst in breast cancer refers to a measure of 
          the complexity and irregularity of the tumor mass at its worst or 
          most severe area. It quantifies the degree of intricate patterns and 
          irregularities in the boundary of the cells.
          </p>
          <p>
          The values range of Fractal Dimension Worst can vary depending on 
          the dataset and the measurement units used. However, in general,
           the range is typically between 0.0 and 1.0. A lower value indicates 
          a smoother and less complex boundary, while a higher value suggests
           a more intricate and irregular boundary of the cells in the tumor.
          </p>
          <p>
          Fractal Dimension Worst is a mathematical measure that helps assess 
          the texture and structural characteristics of the tumor. 
          It is used as a feature in diagnosing and staging breast cancer, 
          along with other clinical information, imaging results, and diagnostic 
          tests.
          </p>
          
        </div>
      </div>
    </div>
  );
}
