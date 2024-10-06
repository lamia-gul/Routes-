import Button from "@/app/country/button/btn";

export default function CountryPage({ params }: { params: { country_name: string } }) {
    // Object containing country data with name, capital, and population
    const countries = {
      pakistan: { name: 'Pakistan', capital: 'Islamabad', population: '220 million' },
      usa: { name: 'USA', capital: 'Washington, D.C.', population: '331 million' },
      canada: { name: 'Canada', capital: 'Ottawa', population: '38 million' },
      germany: { name: 'Germany', capital: 'Berlin', population: '83 million' },
      australia: { name: 'Australia', capital: 'Canberra', population: '26 million' },
    };
  
    // Fetch the country object based on the country_name from URL
    const Country = params.country_name ? countries[params.country_name.toLowerCase()] : null;
  
    return (
      <div>
        {Country ? (
          <div>
            <h1>Country Name: {Country.name}</h1>
            <p>Capital: {Country.capital}</p>
            <p>Population: {Country.population}</p>
          </div>
        ) : (
          <h1>Country Not Found</h1>
        )}
      </div>
    );
  }
  