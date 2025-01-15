# Dietary compositions by commodity group - Data package

This data package contains the data that powers the chart ["Dietary compositions by commodity group"](https://ourworldindata.org/grapher/dietary-compositions-by-commodity-group?v=1&csvType=full&useColumnShortNames=false) on the Our World in Data website.

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


## Other
Last updated: March 14, 2024  
Next update: March 2025  
Date range: 1961–2021  
Unit: kilocalories per day per capita  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
Food and Agriculture Organization of the United Nations (2023) – processed by Our World in Data

#### Full citation
Food and Agriculture Organization of the United Nations (2023) – processed by Our World in Data. “Other” [dataset]. Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (-2013, old methodology and population)”; Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (2010-)” [original data].
Source: Food and Agriculture Organization of the United Nations (2023) – processed by Our World In Data

### What you should know about this data
* This data represents the average daily per capita supply of calories from the full range of commodities, grouped by food categories. Note that these figures do not correct for waste at the household or consumption level, so they may not directly reflect the quantity of food finally consumed by a given individual.

Specific food commodities have been grouped into higher-level categories. Food group 'Other' includes the FAO item groups: 'Stimulants', 'Spices', 'Miscellaneous group', 'Offals group', 'Aquatic Products, Other'.

### Sources

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (-2013, old methodology and population)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBSH  

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (2010-)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBS  


## Alcoholic beverages
Last updated: March 14, 2024  
Next update: March 2025  
Date range: 1961–2021  
Unit: kilocalories per day per capita  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
Food and Agriculture Organization of the United Nations (2023) – processed by Our World in Data

#### Full citation
Food and Agriculture Organization of the United Nations (2023) – processed by Our World in Data. “Alcoholic beverages” [dataset]. Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (-2013, old methodology and population)”; Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (2010-)” [original data].
Source: Food and Agriculture Organization of the United Nations (2023) – processed by Our World In Data

### What you should know about this data
* This data represents the average daily per capita supply of calories from the full range of commodities, grouped by food categories. Note that these figures do not correct for waste at the household or consumption level, so they may not directly reflect the quantity of food finally consumed by a given individual.

Specific food commodities have been grouped into higher-level categories. Food group 'Alcoholic beverages' includes the FAO item groups: 'Alcoholic Beverages'.

### Sources

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (-2013, old methodology and population)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBSH  

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (2010-)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBS  


## Sugar
Last updated: March 14, 2024  
Next update: March 2025  
Date range: 1961–2021  
Unit: kilocalories per day per capita  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
Food and Agriculture Organization of the United Nations (2023) – processed by Our World in Data

#### Full citation
Food and Agriculture Organization of the United Nations (2023) – processed by Our World in Data. “Sugar” [dataset]. Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (-2013, old methodology and population)”; Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (2010-)” [original data].
Source: Food and Agriculture Organization of the United Nations (2023) – processed by Our World In Data

### What you should know about this data
* This data represents the average daily per capita supply of calories from the full range of commodities, grouped by food categories. Note that these figures do not correct for waste at the household or consumption level, so they may not directly reflect the quantity of food finally consumed by a given individual.

Specific food commodities have been grouped into higher-level categories. Food group 'Sugar' includes the FAO item groups: 'Sugar & Sweeteners', 'Sugar crops'.

### Sources

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (-2013, old methodology and population)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBSH  

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (2010-)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBS  


## Oils and fats
Last updated: March 14, 2024  
Next update: March 2025  
Date range: 1961–2021  
Unit: kilocalories per day per capita  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
Food and Agriculture Organization of the United Nations (2023) – processed by Our World in Data

#### Full citation
Food and Agriculture Organization of the United Nations (2023) – processed by Our World in Data. “Oils and fats” [dataset]. Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (-2013, old methodology and population)”; Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (2010-)” [original data].
Source: Food and Agriculture Organization of the United Nations (2023) – processed by Our World In Data

### What you should know about this data
* This data represents the average daily per capita supply of calories from the full range of commodities, grouped by food categories. Note that these figures do not correct for waste at the household or consumption level, so they may not directly reflect the quantity of food finally consumed by a given individual.

Specific food commodities have been grouped into higher-level categories. Food group 'Oils and fats' includes the FAO item groups: 'Treenuts', 'Oilcrops', 'Vegetable Oils', 'Animal fats group'.

### Sources

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (-2013, old methodology and population)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBSH  

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (2010-)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBS  


## Meat
Last updated: March 14, 2024  
Next update: March 2025  
Date range: 1961–2021  
Unit: kilocalories per day per capita  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
Food and Agriculture Organization of the United Nations (2023) – processed by Our World in Data

#### Full citation
Food and Agriculture Organization of the United Nations (2023) – processed by Our World in Data. “Meat” [dataset]. Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (-2013, old methodology and population)”; Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (2010-)” [original data].
Source: Food and Agriculture Organization of the United Nations (2023) – processed by Our World In Data

### What you should know about this data
* This data represents the average daily per capita supply of calories from the full range of commodities, grouped by food categories. Note that these figures do not correct for waste at the household or consumption level, so they may not directly reflect the quantity of food finally consumed by a given individual.

Specific food commodities have been grouped into higher-level categories. Food group 'Meat' includes the FAO item groups: 'Meat, total', 'Fish and seafood'.

### Sources

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (-2013, old methodology and population)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBSH  

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (2010-)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBS  


## Dairy and eggs
Last updated: March 14, 2024  
Next update: March 2025  
Date range: 1961–2021  
Unit: kilocalories per day per capita  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
Food and Agriculture Organization of the United Nations (2023) – processed by Our World in Data

#### Full citation
Food and Agriculture Organization of the United Nations (2023) – processed by Our World in Data. “Dairy and eggs” [dataset]. Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (-2013, old methodology and population)”; Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (2010-)” [original data].
Source: Food and Agriculture Organization of the United Nations (2023) – processed by Our World In Data

### What you should know about this data
* This data represents the average daily per capita supply of calories from the full range of commodities, grouped by food categories. Note that these figures do not correct for waste at the household or consumption level, so they may not directly reflect the quantity of food finally consumed by a given individual.

Specific food commodities have been grouped into higher-level categories. Food group 'Dairy and eggs' includes the FAO item groups: 'Milk', 'Eggs'.

### Sources

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (-2013, old methodology and population)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBSH  

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (2010-)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBS  


## Fruits and vegetables
Last updated: March 14, 2024  
Next update: March 2025  
Date range: 1961–2021  
Unit: kilocalories per day per capita  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
Food and Agriculture Organization of the United Nations (2023) – processed by Our World in Data

#### Full citation
Food and Agriculture Organization of the United Nations (2023) – processed by Our World in Data. “Fruits and vegetables” [dataset]. Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (-2013, old methodology and population)”; Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (2010-)” [original data].
Source: Food and Agriculture Organization of the United Nations (2023) – processed by Our World In Data

### What you should know about this data
* This data represents the average daily per capita supply of calories from the full range of commodities, grouped by food categories. Note that these figures do not correct for waste at the household or consumption level, so they may not directly reflect the quantity of food finally consumed by a given individual.

Specific food commodities have been grouped into higher-level categories. Food group 'Fruits and vegetables' includes the FAO item groups: 'Vegetables', 'Fruit'.

### Sources

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (-2013, old methodology and population)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBSH  

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (2010-)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBS  


## Starchy roots
Last updated: March 14, 2024  
Next update: March 2025  
Date range: 1961–2021  
Unit: kilocalories per day per capita  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
Food and Agriculture Organization of the United Nations (2023) – processed by Our World in Data

#### Full citation
Food and Agriculture Organization of the United Nations (2023) – processed by Our World in Data. “Starchy roots” [dataset]. Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (-2013, old methodology and population)”; Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (2010-)” [original data].
Source: Food and Agriculture Organization of the United Nations (2023) – processed by Our World In Data

### What you should know about this data
* This data represents the average daily per capita supply of calories from the full range of commodities, grouped by food categories. Note that these figures do not correct for waste at the household or consumption level, so they may not directly reflect the quantity of food finally consumed by a given individual.

Specific food commodities have been grouped into higher-level categories. Food group 'Starchy roots' includes the FAO item groups: 'Starchy Roots'.

### Sources

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (-2013, old methodology and population)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBSH  

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (2010-)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBS  


## Pulses
Last updated: March 14, 2024  
Next update: March 2025  
Date range: 1961–2021  
Unit: kilocalories per day per capita  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
Food and Agriculture Organization of the United Nations (2023) – processed by Our World in Data

#### Full citation
Food and Agriculture Organization of the United Nations (2023) – processed by Our World in Data. “Pulses” [dataset]. Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (-2013, old methodology and population)”; Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (2010-)” [original data].
Source: Food and Agriculture Organization of the United Nations (2023) – processed by Our World In Data

### What you should know about this data
* This data represents the average daily per capita supply of calories from the full range of commodities, grouped by food categories. Note that these figures do not correct for waste at the household or consumption level, so they may not directly reflect the quantity of food finally consumed by a given individual.

Specific food commodities have been grouped into higher-level categories. Food group 'Pulses' includes the FAO item groups: 'Pulses'.

### Sources

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (-2013, old methodology and population)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBSH  

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (2010-)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBS  


## Cereals and grains
Last updated: March 14, 2024  
Next update: March 2025  
Date range: 1961–2021  
Unit: kilocalories per day per capita  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
Food and Agriculture Organization of the United Nations (2023) – processed by Our World in Data

#### Full citation
Food and Agriculture Organization of the United Nations (2023) – processed by Our World in Data. “Cereals and grains” [dataset]. Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (-2013, old methodology and population)”; Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (2010-)” [original data].
Source: Food and Agriculture Organization of the United Nations (2023) – processed by Our World In Data

### What you should know about this data
* This data represents the average daily per capita supply of calories from the full range of commodities, grouped by food categories. Note that these figures do not correct for waste at the household or consumption level, so they may not directly reflect the quantity of food finally consumed by a given individual.

Specific food commodities have been grouped into higher-level categories. Food group 'Cereals and grains' includes the FAO item groups: 'Cereals - Excluding Beer'.

### Sources

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (-2013, old methodology and population)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBSH  

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (2010-)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBS  


    