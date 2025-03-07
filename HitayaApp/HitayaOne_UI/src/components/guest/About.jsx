export default function About() {
  return (
    <div className="mt-4 mb-5 mt-sm-5 container">
      <div className="row animated fadeInDown">
        <div className="col-md-6 offset-md-3">
          <h1 className="mb-4 font-bold">About</h1>
          <p>
            ML models can analyze various types of medical data, including
            electronic health records, medical images (such as X-rays, CT scans,
            and MRIs), genetic data, and wearable device data. By training on
            labeled datasets, ML models can recognize patterns that are
            indicative of specific diseases or conditions. These patterns may be
            subtle and difficult for human experts to detect, but ML algorithms
            excel at uncovering them.
          </p>
          <p className="alert alert-info my-5">
            ML algorithms are designed to learn from this data, identify
            patterns, and make predictions or classifications based on the
            learned patterns.
          </p>
          <p>
            Overall, the integration of ML in healthcare has opened up new
            possibilities for detecting patterns that indicate underlying
            diseases, ultimately contributing to the noble aspiration of
            improving humanity's well-being.
          </p>
        </div>
      </div>
    </div>
  );
}
