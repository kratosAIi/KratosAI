import React, { useState } from 'react';
import './BasicCustomerInfo.css';
import addSquareIcon from '../../assets/Add_square_light.png';

interface OwnershipDirector {
  id: string;
  companyName: string;
  entityType: string;
  industry: string;
}

interface BasicCustomerInfoProps {
  leadId?: string;
}

const BasicCustomerInfo: React.FC<BasicCustomerInfoProps> = ({ leadId }) => {
  const [ownershipDirectors, setOwnershipDirectors] = useState<OwnershipDirector[]>([
    { id: '1', companyName: '', entityType: '', industry: '' }
  ]);

  const handleInputChange = (
    section: string,
    field: string,
    value: string,
    index?: number
  ) => {
    // This will be implemented later when backend is ready
    console.log(`Section: ${section}, Field: ${field}, Value: ${value}, Index: ${index}`);
  };

  const addOwnershipDirector = () => {
    const newDirector: OwnershipDirector = {
      id: Date.now().toString(),
      companyName: '',
      entityType: '',
      industry: ''
    };
    setOwnershipDirectors([...ownershipDirectors, newDirector]);
  };

  const handleClearData = () => {
    // Reset form data
    setOwnershipDirectors([{ id: '1', companyName: '', entityType: '', industry: '' }]);
  };

  const handleSaveBasicInformation = () => {
    // This will be implemented later when backend is ready
    console.log('Save Basic Information');
  };

  return (
    <div className="basic-customer-info">
      <div className="form-container">
        {/* Lead & Entity Information */}
          <h3 className="section-title">
            Lead & Entity Information
            <span className="info-icon" data-tooltip="Borrower Information">ⓘ</span>
          </h3>
          <div className="form-grid">
            <div className="form-group">
              <input
                type="text"
                placeholder="Company name"
                className="form-input"
                onChange={(e) => handleInputChange('leadEntity', 'companyName', e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Entity type"
                className="form-input"
                onChange={(e) => handleInputChange('leadEntity', 'entityType', e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Industry"
                className="form-input"
                onChange={(e) => handleInputChange('leadEntity', 'industry', e.target.value)}
              />
            </div>
        </div>

        {/* Government Registrations */}
          <h3 className="section-title">Government Registrations</h3>
          <div className="form-grid">
            <div className="form-group">
              <input
                type="text"
                placeholder="Legal name"
                className="form-input"
                onChange={(e) => handleInputChange('govRegistrations', 'legalName', e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Reg. number"
                className="form-input"
                onChange={(e) => handleInputChange('govRegistrations', 'regNumber', e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Reg. type"
                className="form-input"
                onChange={(e) => handleInputChange('govRegistrations', 'regType', e.target.value)}
              />
            </div>
        </div>

        {/* Contact Details */}
          <h3 className="section-title">Contact Details</h3>
          <div className="form-grid">
            <div className="form-group">
              <input
                type="text"
                placeholder="Contact person"
                className="form-input"
                onChange={(e) => handleInputChange('contactDetails', 'contactPerson', e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Phone number"
                className="form-input"
                onChange={(e) => handleInputChange('contactDetails', 'phoneNumber', e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="form-input"
                onChange={(e) => handleInputChange('contactDetails', 'email', e.target.value)}
              />
            </div>
        </div>

        {/* Addressess */}
          <h3 className="section-title">Addressess</h3>
          <div className="form-grid">
            <div className="form-group">
              <input
                type="text"
                placeholder="Office address"
                className="form-input"
                onChange={(e) => handleInputChange('addresses', 'officeAddress', e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="City"
                className="form-input"
                onChange={(e) => handleInputChange('addresses', 'city', e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="State / Pincode"
                className="form-input"
                onChange={(e) => handleInputChange('addresses', 'statePincode', e.target.value)}
              />
            </div>
        </div>

        {/* Ownership/Directors */}
          <h3 className="section-title">Ownership/Directors</h3>
          {ownershipDirectors.map((director, index) => (
            <div key={director.id} className="form-grid ownership-row">
              <div className="form-group">
                {index === 0 ? (
                  <button className="add-person-btn" onClick={addOwnershipDirector}>
                    <img src={addSquareIcon} alt="Add" className="add-icon" />
                    Add director
                  </button>
                ) : (
                  <input
                    type="text"
                    placeholder="Director name"
                    className="form-input"
                    value={director.companyName}
                    onChange={(e) => {
                      const newDirectors = [...ownershipDirectors];
                      newDirectors[index].companyName = e.target.value;
                      setOwnershipDirectors(newDirectors);
                    }}
                  />
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Director name"
                  className="form-input"
                  value={director.entityType}
                  onChange={(e) => {
                    const newDirectors = [...ownershipDirectors];
                    newDirectors[index].entityType = e.target.value;
                    setOwnershipDirectors(newDirectors);
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Designation"
                  className="form-input"
                  value={director.industry}
                  onChange={(e) => {
                    const newDirectors = [...ownershipDirectors];
                    newDirectors[index].industry = e.target.value;
                    setOwnershipDirectors(newDirectors);
                  }}
                />
              </div>
            </div>
          ))}

        {/* Business Financials */}
          <h3 className="section-title">Business Financials</h3>
          <div className="form-grid">
            <div className="form-group">
              <input
                type="text"
                placeholder="Turnover"
                className="form-input"
                onChange={(e) => handleInputChange('businessFinancials', 'turnover', e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="ITR amount"
                className="form-input"
                onChange={(e) => handleInputChange('businessFinancials', 'itrAmount', e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Banking revenue"
                className="form-input"
                onChange={(e) => handleInputChange('businessFinancials', 'bankingRevenue', e.target.value)}
              />
            </div>
        </div>

        {/* Action Buttons */}
        <div className="form-actions">
          <button className="btn-clear" onClick={handleClearData}>
            Clear Data
          </button>
          <button className="btn-save" onClick={handleSaveBasicInformation}>
            Save Basic Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasicCustomerInfo;
