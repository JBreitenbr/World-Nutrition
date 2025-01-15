# Per capita sources of protein - Data package

This data package contains the data that powers the chart ["Per capita sources of protein"](https://ourworldindata.org/grapher/per-capita-sources-of-protein?v=1&csvType=full&useColumnShortNames=false) on the Our World in Data website.

## CSV Structure

The high level structure of the CSV file is that each row is an observation for an entity (usually a country or region) and a timepoint (usually a year).

The first two columns in the CSV file are "Entity" and "Code". "Entity" is the name of the entity (e.g. "United States"). "Code" is the OWID internal entity code that we use if the entity is a country or region. For normal countries, this is the same as the [iso alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code of the entity (e.g. "USA") - for non-standard countries like historical countries these are custom codes.

The third column is either "Year" or "Day". If the data is annual, this is "Year" and contains only the year as an integer. If the column is "Day", the column contains a date string in the form "YYYY-MM-DD".

The remaining columns are the data columns, each of which is a time series. If the CSV data is downloaded using the "full data" option, then each column corresponds to one time series below. If the CSV data is downloaded using the "only selected data visible in the chart" option then the data columns are transformed depending on the chart type and thus the association with the time series might not be as straightforward.

## Metadata.json structure

The .metadata.json file contains metadata about the data package. The "charts" key contains information to recreate the chart, like the title, subtitle etc.. The "columns" key contains information about each of the columns in the csv, like the unit, timespan covered, citation for the data etc..

## About the data

Our World in Data is almost never the original producer of the data - almost all of the data we use has been compiled by others. If you want to re-use data, it is your responsibility to ensure that you adhere to the sources' license and to credit them correctly. Please note that a single time series may have more than one source - e.g. when we stich together data from different time periods by different producers or when we calculate per capita metrics using population data from a second source.

### How we process data at Our World In Data
All data and visualizations on Our World in Data rely on data sourced from one or several original data providers. Preparing this original data involves several processing steps. Depending on the data, this can include standardizing country names and world region definitions, converting units, calculating derived indicators such as per capita measures, as well as adding or adapting metadata such as the name or the description given to an indicator.
[Read about our data pipeline](https://docs.owid.io/projects/etl/)

## Detailed information about each time series


## Daily supply of protein from vegetal products – FAO
Last updated: March 14, 2024  
Next update: March 2025  
Date range: 1961–2021  
Unit: grams of protein per day per capita  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World in Data

#### Full citation
Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World in Data. “Daily supply of protein from vegetal products – FAO” [dataset]. Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (-2013, old methodology and population)”; Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (2010-)” [original data].
Source: Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World In Data

### What you should know about this data

### How is this data described by its producer - Food and Agriculture Organization of the United Nations (2023)?
Item: Vegetal Products

Metric: Food available for consumption
Description: Originally given per-capita, and converted into total figures by multiplying by population (given by FAO). Per-capita values are obtained by dividing the original values by the population (either provided by FAO or by OWID).

### Sources

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (-2013, old methodology and population)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBSH  

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (2010-)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBS  


## Daily supply of protein from fish and seafood – FAO
Last updated: March 14, 2024  
Next update: March 2025  
Date range: 1961–2021  
Unit: grams of protein per day per capita  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World in Data

#### Full citation
Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World in Data. “Daily supply of protein from fish and seafood – FAO” [dataset]. Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (-2013, old methodology and population)”; Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (2010-)” [original data].
Source: Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World In Data

### What you should know about this data

### How is this data described by its producer - Food and Agriculture Organization of the United Nations (2023)?
Item: Fish and seafood

Metric: Food available for consumption
Description: Originally given per-capita, and converted into total figures by multiplying by population (given by FAO). Per-capita values are obtained by dividing the original values by the population (either provided by FAO or by OWID).

### Sources

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (-2013, old methodology and population)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBSH  

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (2010-)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBS  


## Daily supply of protein from meat – FAO
Last updated: March 14, 2024  
Next update: March 2025  
Date range: 1961–2021  
Unit: grams of protein per day per capita  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World in Data

#### Full citation
Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World in Data. “Daily supply of protein from meat – FAO” [dataset]. Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (-2013, old methodology and population)”; Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (2010-)” [original data].
Source: Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World In Data

### What you should know about this data

### How is this data described by its producer - Food and Agriculture Organization of the United Nations (2023)?
Item: Meat, total

Metric: Food available for consumption
Description: Originally given per-capita, and converted into total figures by multiplying by population (given by FAO). Per-capita values are obtained by dividing the original values by the population (either provided by FAO or by OWID).

### Sources

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (-2013, old methodology and population)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBSH  

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (2010-)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBS  


## Daily supply of protein from egg products – FAO
Last updated: March 14, 2024  
Next update: March 2025  
Date range: 1961–2021  
Unit: grams of protein per day per capita  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World in Data

#### Full citation
Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World in Data. “Daily supply of protein from egg products – FAO” [dataset]. Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (-2013, old methodology and population)”; Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (2010-)” [original data].
Source: Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World In Data

### What you should know about this data

### How is this data described by its producer - Food and Agriculture Organization of the United Nations (2023)?
Item: All egg products
Description: Default composition: 916 Egg albumine, 1062 Eggs, hen, in shell, 1063 Eggs, liquid, 1064 Eggs, dried, 1091 Eggs, other bird, in shell

Metric: Food available for consumption
Description: Originally given per-capita, and converted into total figures by multiplying by population (given by FAO). Per-capita values are obtained by dividing the original values by the population (either provided by FAO or by OWID).

### Sources

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (-2013, old methodology and population)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBSH  

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (2010-)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBS  


## Daily supply of protein from milk – FAO
Last updated: March 14, 2024  
Next update: March 2025  
Date range: 1961–2021  
Unit: grams of protein per day per capita  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World in Data

#### Full citation
Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World in Data. “Daily supply of protein from milk – FAO” [dataset]. Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (-2013, old methodology and population)”; Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (2010-)” [original data].
Source: Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World In Data

### What you should know about this data

### How is this data described by its producer - Food and Agriculture Organization of the United Nations (2023)?
Item: Milk

Metric: Food available for consumption
Description: Originally given per-capita, and converted into total figures by multiplying by population (given by FAO). Per-capita values are obtained by dividing the original values by the population (either provided by FAO or by OWID).

### Sources

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (-2013, old methodology and population)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBSH  

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (2010-)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBS  


    