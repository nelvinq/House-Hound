const PropertyDetails = ({propertyDetails}) => {
    if (!propertyDetails || propertyDetails.length === 0) {
        return <p>No propertyDetails available. Please select a property.</p>;
      }
    
      const property = propertyDetails[0]; // Assuming you're passing a filtered array with a single property.
    
      return (
        <div>
          <h2>Property Details</h2>
          <div>
            <p>
              <strong>Project:</strong> {property.project}
            </p>
            <p>
              <strong>Street:</strong> {property.street}
            </p>
            <p>
              <strong>Market Segment:</strong> {property.marketSegment || 'N/A'}
            </p>
            <p>
              <strong>Coordinates:</strong> {property.x}, {property.y}
            </p>
            <h3>Transactions:</h3>
        {property.transaction && property.transaction.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Area (sqm)</th>
                <th>Price ($)</th>
                <th>Property Type</th>
              </tr>
            </thead>
            <tbody>
              {property.transaction.map((txn, index) => (
                <tr key={index}>
                  <td>{txn.contractDate || 'N/A'}</td>
                  <td>{txn.area || 'N/A'}</td>
                  <td>{txn.price || 'N/A'}</td>
                  <td>{txn.propertyType || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No transactions available.</p>
        )}
      </div>
    </div>
  );
};

export default PropertyDetails;