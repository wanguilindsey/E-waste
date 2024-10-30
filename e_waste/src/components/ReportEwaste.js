import React, { useState } from 'react';
import Header from './Header';

const ReportEwaste = () => {
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [brand, setBrand] = useState('');
    const [condition, setCondition] = useState('');
    const [location, setLocation] = useState('');
    const [details, setDetails] = useState('');
    const [photo, setPhoto] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic for submitting the report
        console.log({
            category,
            type,
            brand,
            condition,
            location,
            details,
            photo
        });
    };

    const handlePhotoUpload = (e) => {
        setPhoto(e.target.files[0]);
    };

    return (
        <div className="report-ewaste-container">
            <Header title="Report E-waste" titleIcon="fas fa-recycle" />
            <form onSubmit={handleSubmit}>
                <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option value="" disabled>Select Category</option>
                    <option value="electronics">Household Appliance</option>
                    <option value="appliances">ICT Device</option>
                    <option value="batteries">Consumer Electronic</option>
                    <option value="batteries">Lighting Equipment</option>
                    <option value="batteries">Industrial and Commercial</option>
                    <option value="batteries">Medical Device</option>
                    <option value="batteries">Electronic Tool</option>
                </select>

                <input
                    type="text"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    placeholder="Type"
                    required
                />
                <input
                    type="text"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    placeholder="Brand"
                    required
                />
                <select value={condition} onChange={(e) => setCondition(e.target.value)} required>
                    <option value="" disabled>Select Condition</option>
                    <option value="functional">Functional</option>
                    <option value="damaged">Damaged</option>
                    <option value="obsolete">Obsolete</option>
                </select>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location"
                    required
                />
                <textarea
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Provide more details"
                    required
                />

                <div className="upload-photo-container">
                    <input
                        type="file"
                        accept=".jpg, .png"
                        onChange={handlePhotoUpload}
                        style={{ display: 'none' }}
                        id="photo-upload"
                    />
                    <label htmlFor="photo-upload" className="upload-label">
                        {photo ? photo.name : 'Click to upload or drag your photo here'}
                    </label>
                </div>

                <div className="buttons-container">
                    <button type="button" className="cancel-button">Cancel</button>
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ReportEwaste;