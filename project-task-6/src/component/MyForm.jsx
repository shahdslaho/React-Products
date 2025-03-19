
//import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// eslint-disable-next-line react/prop-types
const MyForm = ({title , onSubmit , initialData}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialData || {}, // تعيين القيم الأولية إذا كانت موجودة
  });

  const handleFormSubmit = (data) => {
    onSubmit(data); // تمرير البيانات إلى onSubmit
    if (!initialData) {
      reset(); // إعادة تعيين النموذج إذا كان في وضع الإضافة
    }
  };
  return (
    <div >
     <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              {...register("status", { required: "Status is required" })}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.status ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            >
              <option value="Okey">Okey</option>
              <option value="Not okey">Not okey</option>
            </select>
            {errors.status && (
              <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              {...register("price", { required: "Price is required" })}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.price ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <input
              type="number"
              {...register("rating", { required: "Rating is required" })}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.rating ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.rating && (
              <p className="text-red-500 text-sm mt-1">{errors.rating.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              {...register("image_url", { required: "Image URL is required" })}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.image_url ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.image_url && (
              <p className="text-red-500 text-sm mt-1">{errors.image_url.message}</p>
            )}
          </div>
        </div>
        <button
        
          type="submit"
          className="mt-6 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {title}
        </button>
      </form>
    </div>
    </div>
  );
};

export default MyForm;