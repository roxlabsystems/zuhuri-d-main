import React from "react";
import EditText from "../../components/ui/EditText";

const PropertyFilters = ({ filters, onChange, onReset }) => {
  // Handle controlled field updates
  const handleFilterChange = (field, value) => {
    onChange({
      ...filters,
      [field]: value,
    });
  };

  return (
    <div className="w-full max-w-[1226px] mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className="bg-secondary-light rounded-lg shadow-[8px_4px_4px_#0000003f] p-6 md:p-8 lg:p-12"
        style={{
          backgroundColor: "#ffffffe2",
        }}
      >
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center">
          {/* Location Filter */}
          <div className="w-full lg:w-[30%]">
            <EditText
              placeholder="Location"
              text_font_size="20"
              text_font_family="League Spartan"
              text_font_weight="300"
              text_line_height="19px"
              text_text_align="left"
              text_color="#1e1b54"
              border_border="1px solid #1e1b54"
              border_border_radius="30px"
              padding="12px 22px"
              value={filters?.location}
              onChange={(e) =>
                handleFilterChange("location", e?.target?.value)
              }
              className="w-full"
            />
          </div>

          {/* Price Filter */}
          <div className="w-full lg:w-[32%]">
            <EditText
              placeholder="Price (e.g. Below 1M, 1M-10M, Above 10M)"
              text_font_size="20"
              text_font_family="League Spartan"
              text_font_weight="300"
              text_line_height="19px"
              text_text_align="left"
              text_color="#1e1b54"
              border_border="1px solid #1e1b54"
              border_border_radius="30px"
              padding="12px 22px"
              value={filters?.price}
              onChange={(e) => handleFilterChange("price", e?.target?.value)}
              className="w-full"
            />
          </div>

          {/* Type Filter */}
          <div className="w-full lg:w-[32%]">
            <EditText
              placeholder="Type (e.g. Apartment, House, Land)"
              text_font_size="20"
              text_font_family="League Spartan"
              text_font_weight="300"
              text_line_height="19px"
              text_text_align="left"
              text_color="#1e1b54"
              border_border="1px solid #1e1b54"
              border_border_radius="30px"
              padding="12px 22px"
              value={filters?.type}
              onChange={(e) => handleFilterChange("type", e?.target?.value)}
              className="w-full"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center lg:justify-end gap-4 mt-6">
          <button
            onClick={onReset}
            className="bg-transparent border border-[#1e1b54] text-[#1e1b54] px-6 py-2 rounded-full text-[16px] font-semibold hover:bg-[#1e1b54] hover:text-white transition-all duration-300"
          >
            Reset
          </button>

          <button
            onClick={() => onChange({ ...filters })}
            className="bg-[#1e1b54] text-white px-8 py-2 rounded-full text-[16px] font-semibold hover:bg-[#2b2880] transition-all duration-300"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;
