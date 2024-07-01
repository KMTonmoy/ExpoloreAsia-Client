import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Providers/AuthProvider';

const Add = () => { 
    const notify = () => toast("The tourist spot has been successfully added.");
    const notify2 = () => toast("Sorry, only tourist spots from Bangladesh, Thailand, Indonesia, Malaysia, Vietnam, and Cambodia are allowed.");
    const notify3 = () => toast("Please fill in all the fields.");

    const handleAddTouristSpot = event => {
        event.preventDefault();

        const form = event.target;

        const fields = ['image', 'tourists_spot_name', 'country_Name', 'location', 'description', 'average_cost', 'seasonality', 'travel_time', 'totaVisitorsPerYear', 'user_email', 'user_name'];
        const isEmpty = fields.some(field => form[field].value.trim() === '');
        if (isEmpty) {
            notify3();
            return;
        }

        const countryName = form.country_Name.value.toLowerCase();
        const allowedCountries = ['bangladesh', 'thailand', 'indonesia', 'malaysia', 'vietnam', 'cambodia'];

        if (allowedCountries.includes(countryName)) {
            const image = form.image.value;
            const tourists_spot_name = form.tourists_spot_name.value;
            const location = form.location.value;
            const description = form.description.value;
            const average_cost = form.average_cost.value;
            const seasonality = form.seasonality.value;
            const travel_time = form.travel_time.value;
            const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
            const user_email = form.user_email.value;
            const user_name = form.user_name.value;
            const uid = form.uid.value;

            const newTouristSpot = {
                image,
                tourists_spot_name,
                country_Name: countryName,
                location,
                description,
                average_cost,
                seasonality,
                travel_time,
                totaVisitorsPerYear,
                user_email,
                user_name,
                uid
            };

            fetch('https://backend-rust-beta.vercel.app/country', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newTouristSpot)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    notify();
                    form.reset();
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } else {
            notify2();
        }
    };

    const { user } = useContext(AuthContext);

    return (
        <div className=" p-24">
            <Helmet>
                <title>Home - ExploreAsia</title>
            </Helmet>
            <h2 className="text-3xl font-extrabold">Add Tourist Spot</h2>
            <form onSubmit={handleAddTouristSpot}>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Tourist Spot Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="tourists_spot_name" placeholder="Tourist Spot Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Country Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="country_Name" placeholder="Country Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Average Cost</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="average_cost" placeholder="Average Cost" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seasonality</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seasonality" placeholder="Seasonality" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Travel Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="travel_time" placeholder="Travel Time" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Total Visitors Per Year</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="totaVisitorsPerYear" placeholder="Total Visitors Per Year" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="user_email" defaultValue={user.email} placeholder="User Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="user_name" defaultValue={user.displayName} placeholder="User Name" className="input input-bordered w-full" />

                            {/* Hide the uid input visually */}
                            <input type="text" name="uid" defaultValue={user.uid} className="input input-bordered sr-only" />
                        </label>
                    </div>
                </div>
                <div className="form-control  w-full   flex justify-end">
                    <button type="submit" className="btn  bg-[#63AB45] text-white">Add Spot</button>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Add;
