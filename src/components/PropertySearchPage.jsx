import Card from 'react-bootstrap/Card';

const PropertySearchPage = ({ properties, handleDetails }) => {
  return (
    <>
    <div className="listing">
    <p><strong>Number of results: {properties.length}</strong></p>
      {properties.length > 0 ? (
        properties.map((property, index) => (
          <div>
            <Card style={{ width: "100%", padding:"10px", borderBottom: "1px solid #ccc"}}>
              <Card.Body>
                <Card.Title style={{fontWeight:"bold"}}>{property.project}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{fontStyle: 'italic'}}>
                 {property.street}
                </Card.Subtitle>
                <Card.Link
                href="#"
                onClick={(e) => {
                      e.preventDefault(); 
                      handleDetails(property.project, property.street)}}>
                        More Details</Card.Link>
              </Card.Body>
            </Card>
          </div>
        ))
      ) : (
        <p>Loading properties...</p>
      )}
    </div>
    </>
  );
};

export default PropertySearchPage;
