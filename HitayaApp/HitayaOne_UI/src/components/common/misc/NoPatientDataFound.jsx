import NO_PATIENTS_DATA_FOUND from "../../../assets/images/no_documents_found.png";

export default function NoPatientDataFound() {
  return (
    <div
      className="row"
      style={{ border: "1px dashed #00000040", borderRadius: "6px" }}
    >
      <div className="col-md-6 offset-md-3 text-center">
        <img
          className="img-fluid mt-4"
          src={NO_PATIENTS_DATA_FOUND}
          style={{ opacity: "0.4", maxWidth: "128px" }}
          alt=""
        />
        <h4 className="text-muted mb-5" style={{ opacity: "0.4" }}>No data found</h4>
      </div>
    </div>
  );
}
