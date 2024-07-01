import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Update = () => {
    const Country = useLoaderData();
    const {
        _id,
        image,
        tourists_spot_name,
        location,
        description,
        average_cost,
        seasonality,
        travel_time,
        totaVisitorsPerYear,
        country_Name
    } = Country;

    const notify = () => toast("The tourist spot has been successfully Updated.");
    const notify2 = () => toast("Sorry, only tourist spots from Bangladesh, Thailand, Indonesia, Malaysia, Vietnam, and Cambodia are allowed.");

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;

        const allowedCountries = ['bangladesh', 'thailand', 'indonesia', 'malaysia', 'vietnam', 'cambodia'];
        const country_Name = form.country_Name.value.toLowerCase();
        if (allowedCountries.includes(country_Name)) {
            const updatedCountry = {
                image: form.image.value,
                tourists_spot_name: form.tourists_spot_name.value,
                country_Name: form.country_Name.value,
                location: form.location.value,
                description: form.description.value,
                average_cost: form.average_cost.value,
                seasonality: form.seasonality.value,
                travel_time: form.travel_time.value,
                totaVisitorsPerYear: form.totaVisitorsPerYear.value,

            };

            console.log(updatedCountry);


            fetch(`https://backend-rust-beta.vercel.app/country/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedCountry)
            })

                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Country Updated Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        });
                    }
                });
            notify()
        } else {
            notify2()
        }


    };

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Update Tourist Spot</h2>
            <form onSubmit={handleUpdate}>
                {/* form image and tourist spot name row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" defaultValue={image} placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label"> 
                            <span className="label-text">Tourist Spot Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="tourists_spot_name" defaultValue={tourists_spot_name} placeholder="Tourist Spot Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form country name and location row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Country Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="country_Name" defaultValue={country_Name} placeholder="Country Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="location" defaultValue={location} placeholder="Location" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form description and average cost row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" defaultValue={description} placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Average Cost</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="average_cost" defaultValue={average_cost} placeholder="Average Cost" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form seasonality and travel time row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seasonality</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seasonality" defaultValue={seasonality} placeholder="Seasonality" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Travel Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="travel_time" defaultValue={travel_time} placeholder="Travel Time" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form total visitors per year and user email row */}
                <div className="md:flex mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Total Visitors Per Year</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="totaVisitorsPerYear" defaultValue={totaVisitorsPerYear} placeholder="Total Visitors Per Year" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="form-control w-full  ml-4 flex justify-end">
                    <button type="submit" className="btn  bg-[#63AB45] text-white">Update</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Update;
