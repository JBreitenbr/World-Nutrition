# Food supply vs. life expectancy - Data package

This data package contains the data that powers the chart ["Food supply vs. life expectancy"](https://ourworldindata.org/grapher/food-supply-vs-life-expectancy?v=1&csvType=full&useColumnShortNames=false) on the Our World in Data website.

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


## Life Expectancy, age 0 – UN WPP
Period life expectancy for individuals who have reached age 0. Estimates are expressed as the expected age at death, not as years left to live.
Last updated: July 12, 2024  
Date range: 1950–2023  
Unit: years  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
UN, World Population Prospects (2024) – processed by Our World in Data

#### Full citation
UN, World Population Prospects (2024) – processed by Our World in Data. “Life Expectancy, age 0 – UN WPP” [dataset]. United Nations, “World Population Prospects” [original data].
Source: UN, World Population Prospects (2024) – processed by Our World In Data

### Source

#### United Nations – World Population Prospects
Retrieved on: 2024-07-11  
Retrieved from: https://population.un.org/wpp/Download/  


## Caloric supply
Last updated: May 23, 2024  
Next update: May 2025  
Date range: 1274–2021  
Unit: kilocalories per day  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
Food and Agriculture Organization of the United Nations (2023) and other sources – with major processing by Our World in Data

#### Full citation
Food and Agriculture Organization of the United Nations (2023); Harris et al. (2015); Floud et al. (2011); Jonsson (1998); Grigg (1995); Fogel (2004); Food and Agriculture Organization of the United Nations (2000); Food and Agriculture Organization of the United Nations (1949); USDA Economic Research Service (ERS) (2015) – with major processing by Our World in Data. “Caloric supply” [dataset]. Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (-2013, old methodology and population)”; Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (2010-)”; Harris et al., “How Many Calories? Food Availability in England and Wales in the Eighteenth and Nineteenth Centuries”; Floud et al., “The Changing Body”; Jonsson, “Changes in food consumption in Iceland, 1770-1940”; Grigg, “The nutritional transition in Western Europe”; Fogel, “The Escape from Hunger and Premature Death”; Food and Agriculture Organization of the United Nations, “The State of Food and Agriculture 2000”; Food and Agriculture Organization of the United Nations, “The State of Food and Agriculture 1949”; USDA Economic Research Service (ERS), “U.S. food supply:  Nutrients and other food components, per capita per day” [original data].
Source: Food and Agriculture Organization of the United Nations (2023), Harris et al. (2015), Floud et al. (2011), Jonsson (1998), Grigg (1995), Fogel (2004), Food and Agriculture Organization of the United Nations (2000), Food and Agriculture Organization of the United Nations (1949), USDA Economic Research Service (ERS) (2015) – with major processing by Our World In Data

### What you should know about this data
* This data shows per capita daily calorie supply, which is the amount of calories available to an average person, and does necessarily correspond to the calories actually consumed by that person.
* Calorie supply is always larger than actual calorie consumption, since there may be waste at the household level.
* For historical data, daily calorie supply and consumption are sometimes used interchangeably, due to poor data availability.
* This data does not give a complete picture of nutrition - for a healthy diet [we need much more](https://ourworldindata.org/micronutrient-deficiency) than just energy. But as the most basic criteria of food security, getting enough calories is an important measure. It is used as input for the most important metrics used to assess global malnutrition: [undernourishment](https://ourworldindata.org/undernourishment-definition).

### Sources

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (-2013, old methodology and population)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBSH  

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (2010-)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBS  

#### Harris et al. – How Many Calories? Food Availability in England and Wales in the Eighteenth and Nineteenth Centuries
Retrieved on: 2024-05-23  
Retrieved from: https://www.emerald.com/insight/content/doi/10.1108/S0363-326820150000031003/full/html  

#### Floud et al. – The Changing Body
Retrieved on: 2024-05-27  
Retrieved from: https://www.cambridge.org/core/books/changing-body/DE3BB0E3577205AC26823CF2120D8B7E  

#### Jonsson – Changes in food consumption in Iceland, 1770-1940
Retrieved on: 2024-05-27  
Retrieved from: https://www.tandfonline.com/doi/abs/10.1080/03585522.1998.10414677  

#### Grigg – The nutritional transition in Western Europe
Retrieved on: 2024-05-27  
Retrieved from: https://www.sciencedirect.com/science/article/abs/pii/S0305748885700187?via%3Dihub  

#### Fogel – The Escape from Hunger and Premature Death
Retrieved on: 2024-05-27  
Retrieved from: https://www.cambridge.org/core/books/escape-from-hunger-and-premature-death-17002100/384C6032DE4E73C90EF6C9D1E55009CA  

#### Food and Agriculture Organization of the United Nations – The State of Food and Agriculture 2000
Retrieved on: 2024-05-27  
Retrieved from: https://www.fao.org/agrifood-economics/publications/detail/en/c/122046/  

#### Food and Agriculture Organization of the United Nations – The State of Food and Agriculture 1949
Retrieved on: 2024-05-27  
Retrieved from: https://www.un-ilibrary.org/content/books/9789210472654  

#### USDA Economic Research Service (ERS) – U.S. food supply:  Nutrients and other food components, per capita per day
Retrieved on: 2024-05-27  
Retrieved from: https://www.ers.usda.gov/data-products/food-availability-per-capita-data-system/food-availability-per-capita-data-system/  

#### Notes on our processing step for this indicator
- For all countries, the data after 1960 is taken from FAOSTAT Food Balances datasets ([old](https://www.fao.org/faostat/en/#data/FBSH) and [new](https://www.fao.org/faostat/en/#data/FBS) methodologies combined).
- For the UK: We load Appendix Table from [Harris et al. (2015)](https://www.emerald.com/insight/content/doi/10.1108/S0363-326820150000031003/full/html). From that table, we select values from [Broadberry et al. (2015)](https://www.cambridge.org/core/books/british-economic-growth-12701870/A270234C137117C8E0F1D1E7E6F0DA56) and the corrected values from [Floud et al (2011)](https://www.cambridge.org/core/books/changing-body/DE3BB0E3577205AC26823CF2120D8B7E) (taking the average value of Estimates (A) and (B)).
- For the US: For years 1800-1900, we use Table 6.6 of [Floud et al. (2011)](https://www.cambridge.org/core/books/changing-body/DE3BB0E3577205AC26823CF2120D8B7E). For years 1900-1960, we use [the archived table of food supply from USDA](https://www.ers.usda.gov/webdocs/DataFiles/50472/nutrients.xls?v=6096.1).
- For Iceland: We use Table 5 of [Jonsson (1994)](https://www.tandfonline.com/doi/abs/10.1080/03585522.1998.10414677).
- For Finland, Germany, Italy, Norway: We use Table 1 from [Grigg (1995)](https://www.sciencedirect.com/science/article/abs/pii/S0305748885700187), which is a compilation of many sources.
- For France: We use Table 1 from Grigg (1995).
  - We include the two additional data points (1705 and 1785) from [Fogel (2004)](https://www.cambridge.org/core/books/escape-from-hunger-and-premature-death-17002100/384C6032DE4E73C90EF6C9D1E55009CA).
- For Belgium and Netherlands: We use Table 5.5 of Floud et al. (2011).
- For Uganda, Cambodia, China, India, Brazil, Mexico, and Peru for 1936 and 1947: We use Table 11 of [FAO (2000)](https://www.fao.org/4/x4400e/x4400e.pdf) (The State of Food and Agriculture).
- For many countries (including some of the above) for 1947 and 1948: We use values from Table 15 from [FAO (1949)](https://www.fao.org/4/ap637e/ap637e.pdf).
- Note that prior to 1961, data for the UK may correspond to England, or England and Wales; and Tanzania refers to Tanganyika.


## Population (historical)
Population by country, available from 10,000 BCE to 2023, based on data and estimates from different sources.
Last updated: July 15, 2024  
Next update: July 2026  
Date range: 10000 BCE – 2023 CE  
Unit: people  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
HYDE (2023); Gapminder (2022); UN WPP (2024) – with major processing by Our World in Data

#### Full citation
HYDE (2023); Gapminder (2022); UN WPP (2024) – with major processing by Our World in Data. “Population (historical)” [dataset]. PBL Netherlands Environmental Assessment Agency, “History Database of the Global Environment 3.3”; Gapminder, “Population v7”; United Nations, “World Population Prospects”; Gapminder, “Systema Globalis” [original data].
Source: HYDE (2023); Gapminder (2022); UN WPP (2024) – with major processing by Our World In Data

### What you should know about this data

### Sources

#### PBL Netherlands Environmental Assessment Agency – History Database of the Global Environment
Retrieved on: 2024-01-02  
Retrieved from: https://doi.org/10.24416/UU01-AEZZIT  

#### Gapminder – Population
Retrieved on: 2023-03-31  
Retrieved from: http://gapm.io/dpop  

#### United Nations – World Population Prospects
Retrieved on: 2024-07-11  
Retrieved from: https://population.un.org/wpp/Download/  

#### Gapminder – Systema Globalis
Retrieved on: 2023-03-31  
Retrieved from: https://github.com/open-numbers/ddf--gapminder--systema_globalis  

#### Notes on our processing step for this indicator
The population data is constructed by combining data from multiple sources:

- 10,000 BCE - 1799: Historical estimates by HYDE (v3.3).

- 1800 - 1949: Historical estimates by Gapminder (v7).

- 1950-2023: Population records by the UN World Population Prospects (2024 revision).


## World regions according to OWID
Last updated: January 1, 2023  
Date range: 2023–2023  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
Our World in Data – processed by Our World in Data

#### Full citation
Our World in Data – processed by Our World in Data. “World regions according to OWID” [dataset]. Our World in Data, “Regions” [original data].
Source: Our World in Data

### What you should know about this data

### Source

#### Our World in Data – Regions


    