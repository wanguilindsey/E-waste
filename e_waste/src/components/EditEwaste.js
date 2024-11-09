import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

const EditEwaste = () => {
    const { id } = useParams();
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [brand, setBrand] = useState('');
    const [condition, setCondition] = useState('');
    const [location, setLocation] = useState('');
    const [details, setDetails] = useState('');
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchSubmissionData = async () => {
            // Placeholder: replace with actual API call
            const data = await fetch(`/api/submissions/${id}`).then(res => res.json());
            setCategory(data.category);
            setType(data.type);
            setBrand(data.brand);
            setCondition(data.condition);
            setLocation(data.location);
            setDetails(data.details);
            setPhotos(data.photos || []);
        };

        fetchSubmissionData();
    }, [id]);

    const handleSubmit = (e) => {
        console.log({
            category,
            type,
            brand,
            condition,
            location,
            details,
            photos
        });
    };

    const handlePhotoUpload = (e) => {
        setPhotos([...photos, ...Array.from(e.target.files)]);
    };

    return (
        <div className="edit-ewaste-container">
             <Header title="Edit E-waste" titleIcon="fas fa-edit" />
             <form onSubmit={handleSubmit}>
                <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option value="" disabled>Select Category</option>
                    <option value="electronics">Household Appliance</option>
                    <option value="appliances">ICT Device</option>
                    <option value="batteries">Consumer Electronic</option>
                    <option value="lighting">Lighting Equipment</option>
                    <option value="industrial">Industrial and Commercial</option>
                    <option value="medical">Medical Device</option>
                    <option value="tools">Electronic Tool</option>
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
                        multiple
                        style={{ display: 'none' }}
                        id="photo-upload"
                    />
                    <label htmlFor="photo-upload" className="upload-label">
                        {photos.length > 0 ? `${photos.length} photos selected` : 'Click to upload or drag your photos here'}
                    </label>
                </div>

                <div className="buttons-container">
                    <button type="button" className="cancel-button">Cancel</button>
                    <button type="submit" className="submit-button">Update Submission</button>
                </div>
            </form>
        </div>
    );
};

export default EditEwaste;