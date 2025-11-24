import React, { useState } from 'react';
import './BasicCustomerInfo.css';
import addSquareIcon from '../../assets/Add_square_light.png';

interface OwnershipDirector {
  id: string;
  name: string;
  pan: string;
  dob: string;
  designation: string;
}

interface BasicCustomerInfoProps {
  leadId?: string;
}

const BasicCustomerInfo: React.FC<BasicCustomerInfoProps> = ({ leadId }) => {
  const [applicantType, setApplicantType] = useState<'Individual' | 'Business'>('Individual');
  const [ownershipDirectors, setOwnershipDirectors] = useState<OwnershipDirector[]>([]);

  const handleInputChange = (
    section: string,
    field: string,
    value: string,
    index?: number
  ) => {
    console.log(`Section: ${section}, Field: ${field}, Value: ${value}, Index: ${index}`);
  };

  const addOwnershipDirector = () => {
    const newDirector: OwnershipDirector = {
      id: Date.now().toString(),
      name: '',
      pan: '',
      dob: '',
      designation: ''
    };
    setOwnershipDirectors([...ownershipDirectors, newDirector]);
  };

  const handleClearData = () => {
    setOwnershipDirectors([]);
  };

  const handleSaveBasicInformation = () => {
    console.log('Save Basic Information');
  };

  return (
    <div className="basic-customer-info">
      <div className="form-container">
        {/* Lead & Entity Information */}
        <h3 className="section-title">
          Lead & Entity Information
          <span className="info-icon" data-tooltip="Identify whether it's a person or a company">ⓘ</span>
        </h3>
        <div className="form-grid">
          <div className="form-group">
            <select
              className="form-input"
              value={applicantType}
              onChange={(e) => setApplicantType(e.target.value as 'Individual' | 'Business')}
            >
              <option value="Individual">Applicant Type: Individual *</option>
              <option value="Business">Applicant Type: Business *</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder={applicantType === 'Individual' ? 'Full Name *' : 'Business Name *'}
              className="form-input"
              onChange={(e) => handleInputChange('leadEntity', 'name', e.target.value)}
            />
          </div>
          <div className="form-group">
            <select
              className="form-input"
              onChange={(e) => handleInputChange('leadEntity', 'entityType', e.target.value)}
            >
              <option value="">Entity Type *</option>
              <option value="Individual">Individual</option>
              <option value="Proprietorship">Proprietorship</option>
              <option value="Partnership">Partnership</option>
              <option value="Pvt Ltd">Pvt Ltd</option>
              <option value="LLP">LLP</option>
              <option value="Public Ltd">Public Ltd</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Industry *"
              className="form-input"
              onChange={(e) => handleInputChange('leadEntity', 'industry', e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Country *"
              className="form-input"
              onChange={(e) => handleInputChange('leadEntity', 'country', e.target.value)}
            />
          </div>
        </div>

        {/* Government Registrations */}
        <h3 className="section-title">
          Government Registrations
          <span className="info-icon" data-tooltip="For individual or business KYC verification">ⓘ</span>
        </h3>

        {applicantType === 'Individual' ? (
          <div className="form-grid">
            <div className="form-group">
              <input
                type="text"
                placeholder="PAN Number *"
                className="form-input"
                onChange={(e) => handleInputChange('govRegistrations', 'pan', e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Aadhaar Number (optional)"
                className="form-input"
                onChange={(e) => handleInputChange('govRegistrations', 'aadhaar', e.target.value)}
              />
            </div>
          </div>
        ) : (
          <div className="form-grid">
            <div className="form-group">
              <input
                type="text"
                placeholder="Business PAN *"
                className="form-input"
                onChange={(e) => handleInputChange('govRegistrations', 'businessPan', e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="GSTIN *"
                className="form-input"
                onChange={(e) => handleInputChange('govRegistrations', 'gstin', e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="CIN / LLPIN *"
                className="form-input"
                onChange={(e) => handleInputChange('govRegistrations', 'cin', e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Udyam Number (optional)"
                className="form-input"
                onChange={(e) => handleInputChange('govRegistrations', 'udyam', e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Contact Details */}
        <h3 className="section-title">
          Contact Details
          <span className="info-icon" data-tooltip="Works for both individuals and companies">ⓘ</span>
        </h3>
        <div className="form-grid">
          <div className="form-group">
            <input
              type="text"
              placeholder="Contact Person Name *"
              className="form-input"
              onChange={(e) => handleInputChange('contactDetails', 'contactPerson', e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Mobile Number *"
              className="form-input"
              onChange={(e) => handleInputChange('contactDetails', 'phoneNumber', e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address *"
              className="form-input"
              onChange={(e) => handleInputChange('contactDetails', 'email', e.target.value)}
            />
          </div>
        </div>

        {/* Key Person Details (for Business) */}
        {applicantType === 'Business' && (
          <>
            <h3 className="section-title">
              Key Person Details
              <span className="info-icon" data-tooltip="Needed for credit + KYC of owners">ⓘ</span>
            </h3>
            <div className="form-grid">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Authorized Person PAN *"
                  className="form-input"
                  onChange={(e) => handleInputChange('keyPerson', 'pan', e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Authorized Person DOB *"
                  className="form-input"
                  onFocus={(e) => e.target.type = 'date'}
                  onBlur={(e) => {
                    if (!e.target.value) {
                      e.target.type = 'text';
                    }
                  }}
                  onChange={(e) => handleInputChange('keyPerson', 'dob', e.target.value)}
                />
              </div>
            </div>
          </>
        )}

        {/* Addresses */}
        <h3 className="section-title">Addresses</h3>
        {applicantType === 'Individual' ? (
          <div className="form-grid">
            <div className="form-group">
              <input
                type="text"
                placeholder="Address *"
                className="form-input"
                onChange={(e) => handleInputChange('addresses', 'address', e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="City *"
                className="form-input"
                onChange={(e) => handleInputChange('addresses', 'city', e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="State *"
                className="form-input"
                onChange={(e) => handleInputChange('addresses', 'state', e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Pincode *"
                className="form-input"
                onChange={(e) => handleInputChange('addresses', 'pincode', e.target.value)}
              />
            </div>
          </div>
        ) : (
          <div className="form-grid">
            <div className="form-group">
              <input
                type="text"
                placeholder="Registered Address *"
                className="form-input"
                onChange={(e) => handleInputChange('addresses', 'registeredAddress', e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="City *"
                className="form-input"
                onChange={(e) => handleInputChange('addresses', 'city', e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="State *"
                className="form-input"
                onChange={(e) => handleInputChange('addresses', 'state', e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Pincode *"
                className="form-input"
                onChange={(e) => handleInputChange('addresses', 'pincode', e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Ownership/Directors */}
        <h3 className="section-title">
          Ownership
          <span className="info-icon" data-tooltip="For business loans and mandatory for sanctions screening">ⓘ</span>
        </h3>

        {ownershipDirectors.map((director, index) => (
          <div key={director.id} className="form-grid ownership-row">
            <div className="form-group">
              <input
                type="text"
                placeholder="Director / Partner / Owner Name *"
                className="form-input"
                value={director.name}
                onChange={(e) => {
                  const newDirectors = [...ownershipDirectors];
                  newDirectors[index].name = e.target.value;
                  setOwnershipDirectors(newDirectors);
                }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Director/Owner PAN *"
                className="form-input"
                value={director.pan}
                onChange={(e) => {
                  const newDirectors = [...ownershipDirectors];
                  newDirectors[index].pan = e.target.value;
                  setOwnershipDirectors(newDirectors);
                }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Director/Owner DOB *"
                className="form-input"
                value={director.dob}
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => {
                  if (!e.target.value) {
                    e.target.type = 'text';
                  }
                }}
                onChange={(e) => {
                  const newDirectors = [...ownershipDirectors];
                  newDirectors[index].dob = e.target.value;
                  setOwnershipDirectors(newDirectors);
                }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Designation *"
                className="form-input"
                value={director.designation}
                onChange={(e) => {
                  const newDirectors = [...ownershipDirectors];
                  newDirectors[index].designation = e.target.value;
                  setOwnershipDirectors(newDirectors);
                }}
              />
            </div>
          </div>
        ))}

        <div className="form-grid">
          <div className="form-group">
            <button className="add-person-btn" onClick={addOwnershipDirector}>
              <img src={addSquareIcon} alt="Add" className="add-icon" />
              Add Director/Owner
            </button>
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
