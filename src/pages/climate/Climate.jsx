import { NavLink } from "@mantine/core"
import styles from './climate.module.css'
import icon1 from './icons/icon1.png';
import icon2 from './icons/icon2.png';
import icon3 from './icons/icon3.png';
import icon4 from './icons/icon4.png';
import icon5 from './icons/icon5.png';

const Climate = () => {
  return (
    <div style={{display:"flex", padding:"30px", gap:"50px"}}>
      <div className={styles.con1}>
        <h3 style={{margin:"0px", marginBottom:"15px"}}>Navigation</h3>
        <NavLink className={styles.navlink} label="Definitions" href="#defs"/>
        <NavLink className={styles.navlink} label="Climate types" href="#climtypes"/>
        <NavLink className={styles.navlink} label="Climate-Forming Factors" href="#climformfactors"/>
        <NavLink className={styles.navlink} label="Conclusion" href="#conclus"/>
      </div>
      <div className={styles.con2}>

      </div>
      <div className={styles.con3}>
        <div id="defs">
          <h1>Definitions</h1>
          <p>Before we begin, let{"'"}s review some definitions related to climate.</p>
          <div>
            <div className={styles.block1}>
              <h3>1. Climate</h3>
              <img src={icon1} alt="" />
            </div>
            <p>
              Climate refers to the long-term average of weather patterns
              in a particular region, observed over an extended period, typically 
              30 years or more. It encompasses a wide range of atmospheric
              conditions, including temperature, humidity, wind patterns,
              precipitation, and seasonal variations. Unlike weather, which can
              change in a matter of minutes or hours, climate is relatively stable 
              and provides a broad understanding of the environmental 
              conditions of a specific area. Climate classifications can be based 
              on a number of factors, such as latitude, altitude, proximity to 
              oceans, and topography, which all play a significant role in 
              determining the characteristics of a region{"'"}s climate.
            </p>
          </div>
          <div>
            <div className={styles.block1}>
              <h3>2. Weather</h3>
              <img src={icon2} alt="" />
            </div>
            <p>
              Weather describes the current state of the atmosphere in a specific 
              place at a specific time. It includes the day-to-day variations in 
              atmospheric conditions such as temperature, humidity, wind speed, 
              precipitation, cloud cover, and visibility. Weather is highly dynamic and 
              can change rapidly, influenced by local factors like geographical 
              features, elevation, and even human activities. While it is common 
              to check the weather forecast daily for activities like commuting or 
              planning outdoor events, weather itself is the short-term manifestation 
              of the atmospheric conditions that, over time, contribute to the 
              region{"'"}s climate.
            </p>
          </div>
          <div>
            <div className={styles.block1}>
              <h3>3. Greenhouse gases</h3>
              <img src={icon3} alt="" />
            </div>
            <p>
              Greenhouse gases are atmospheric gases that have the ability to 
              absorb and emit infrared radiation, thereby contributing to the 
              greenhouse effect. The most well-known greenhouse gases include 
              carbon dioxide (CO2), methane (CH4), nitrous oxide (N2O), and water 
              vapor. These gases are essential for maintaining the Earth{"'"}s 
              temperature, but human activities have significantly increased their 
              concentrations, especially through the burning of fossil fuels, 
              deforestation, and agriculture. This increase in greenhouse gas 
              concentrations is a primary driver of global warming and climate 
              change, leading to disruptions in natural systems, including rising 
              sea levels, shifting weather patterns, and increased frequency of 
              extreme weather events.
            </p>
          </div>
          <div>
            <div className={styles.block1}>
              <h3>4. Climate zones</h3>
              <img src={icon4} alt="" />
            </div>
            <p>
              Climate zones are broad geographical areas that are categorized 
              based on their long-term weather patterns, including temperature, 
              precipitation, and seasonal characteristics. The most widely 
              recognized classification system divides the world into five major 
              climate zones: tropical, dry, temperate, continental, and polar. Each 
              zone has distinct features that influence the types of ecosystems, 
              vegetation, and wildlife that thrive there. For instance, tropical climates 
              are characterized by warm temperatures year-round and significant 
              rainfall, while polar climates are cold with long winters and limited 
              precipitation. Understanding climate zones is essential for studying 
              biodiversity, agriculture, and the impacts of climate change on 
              different regions.
            </p>
          </div>
          <div>
            <div className={styles.block1}>
              <h3>5. Microclimate</h3>
              <img src={icon5} alt="" />
            </div>
            <p>
              A microclimate refers to the localized atmospheric conditions in a 
              specific area that differ from the general climate of the surrounding 
              region. This can occur in places such as urban environments, forests, 
              valleys, or coastal areas, where local factors like buildings, vegetation, 
              water bodies, or elevation create distinct temperature, humidity, and 
              wind patterns. For example, cities often have warmer microclimates 
              than rural areas due to the heat island effect, where concrete and 
              asphalt absorb and retain heat. Microclimates are important for 
              agriculture, urban planning, and environmental conservation, as they 
              can influence plant growth, animal habitats, and human comfort.
            </p>
          </div>
        </div>
        <div id="climtypes">
          <h1>Climate types</h1>
          <p>
            Different regions of the world, depending on their geographical location, 
            altitude, and other factors, have unique climate conditions. In the following 
            descriptions, we will explore the various types of climates that shape the 
            character of our planet.
          </p>
          <div>
            <h3>1. Equatorial Climate</h3>
            <p>
              High temperatures year-round, rarely falling below 25°C (77°F), 
              and consistent, heavy rainfall throughout the year, often over
              2000 mm. Humidity is very high, and tropical rainforests dominate 
              these regions. <br />
              Examples: Amazon Basin, Central Africa, Indonesia.
            </p>
          </div>
          <div>
            <h3>2. Tropical Wet and Dry Climate (Savanna Climate)</h3>
            <p>
              High temperatures all year, but distinct wet and dry seasons. The 
              rainy season brings significant rainfall, while the dry season has 
              little to no rain. <br />
              Examples: African savannas, parts of Brazil, India.
            </p>
          </div>
          <div>
            <h3>3. Tropical Monsoon Climate</h3>
            <p>
              High temperatures year-round with a pronounced wet season due to 
              monsoon winds. Heavy rainfall occurs in the wet season, with much 
              drier conditions during the rest of the year. <br />
              Examples: India, Southeast Asia.
            </p>
          </div>
          <div>
            <h3>4. Tropical Desert Climate</h3>
            <p>
              Extremely hot throughout the year, with very low rainfall (less than 250
              mm annually). Daytime temperatures can exceed 50°C (122°F), while 
              nights can be cool. <br />
              Examples: Sahara Desert, Arabian Desert.
            </p>
          </div>
          <div>
            <h3>5. Humid Subtropical Climate</h3>
            <p>
              Hot and humid summers with mild winters. Rainfall is distributed fairly 
              evenly throughout the year, with occasional tropical storms or cyclones 
              in summer. <br />
              Examples: Southeastern United States (Florida, Georgia), China, Japan
            </p>
          </div>
          <div>
            <h3>6. Mediterranean Climate</h3>
            <p>
              Hot, dry summers and mild, wet winters. This climate is ideal for 
              agriculture, especially growing grapes and olives. Rainfall is mainly 
              concentrated in the winter months. <br />
              Examples: Mediterranean Basin (Italy, Greece, Spain), Southern 
              California, parts of Australia.
            </p>
          </div>
          <div>
            <h3>7. Oceanic Climate (Marine Climate)</h3>
            <p>
              Mild temperatures year-round, with cool summers and mild winters. 
              Rain is fairly evenly distributed throughout the year due to the 
              moderating influence of nearby oceans. <br />
              Examples: United Kingdom, New Zealand, the Pacific Northwest of 
              the USA.
            </p>
          </div>
          <div>
            <h3>8. Continental Climate</h3>
            <p>
              Significant temperature differences between summer and winter. 
              Summers can be very warm, while winters are cold, often with snow. 
              Most precipitation occurs in the summer. <br />
              Examples: Russia (Siberia), Central Europe, parts of North America.
            </p>
          </div>
          <div>
            <h3>9. Subarctic Climate</h3>
            <p>
              Long, extremely cold winters and short, cool summers. Precipitation is 
              generally low, mostly in the form of snow in winter. <br />
              Examples: Northern Canada, Alaska, northern parts of Scandinavia, 
              Siberia.
            </p>
          </div>
          <div>
            <h3>10. Polar Climate</h3>
            <p>
              Temperatures remain below 0°C (32°F) for most of the year. 
              Precipitation is minimal, primarily as snow. Summers are short and cool, 
              while winters are long and harsh. <br />
              Examples: Antarctica, Greenland, Arctic regions.
            </p>
          </div>
        </div>
        <div id="climformfactors">
          <h1>Climate-forming Factors</h1>
          <p>
            Climate is a complex system influenced by various natural and geographical factors 
            that determine the long-term weather patterns of different regions on Earth. 
            Understanding these factors is crucial for comprehending why some areas are hot 
            and humid while others are cold and dry. Here are the main climate-forming factors:
          </p>
          <div>
            <h3>1. Latitude</h3>
            <p>
              The distance from the equator determines the angle of sunlight. 
              Regions near the equator receive direct sunlight and are warmer, while 
              areas closer to the poles are cooler due to more oblique sunlight.
            </p>
          </div>
          <div>
            <h3>2. Altitude</h3>
            <p>
              Higher elevations have cooler temperatures. As air rises, it expands 
              and cools, leading to colder climates in mountainous regions, even in 
              tropical areas.
            </p>
          </div>
          <div>
            <h3>3. Distance from Oceans</h3>
            <p>
              Coastal areas have milder climates with less temperature variation due 
              to the moderating influence of oceans, while inland areas experience 
              more extreme temperatures.
            </p>
          </div>
          <div>
            <h3>4. Ocean Currents</h3>
            <p>
              Warm and cold ocean currents transfer heat across the globe. Warm 
              currents, like the Gulf Stream, moderate coastal climates, while cold 
              currents can create cooler conditions.
            </p>
          </div>
          <div>
            <h3>5. Prevailing Winds</h3>
            <p>
              Wind patterns carry moisture from oceans to land, affecting 
              precipitation. Moist winds can create wet climates, while dry winds can 
              lead to arid conditions.
            </p>
          </div>
          <div>
            <h3>6. Topography</h3>
            <p>
              Physical land features, such as mountains, influence climate by affecting 
              air movement and precipitation. Mountains can create rain shadows, 
              leading to differing climates on either side.
            </p>
          </div>
          <div>
            <h3>7. Earth’s Tilt and Orbit</h3>
            <p>
              The tilt of the Earth and its orbit around the sun cause seasonal 
              changes, resulting in varying amounts of sunlight and temperature 
              differences between regions.
            </p>
          </div>
          <div>
            <h3>8. Human Activities</h3>
            <p>
              Human actions, such as burning fossil fuels and deforestation, have 
              increased greenhouse gas emissions, contributing to global warming 
              and altering climate patterns worldwide.
            </p>
          </div>
        </div>
        <div id="conclus">
          <h1>Conclusion</h1>
          <p>
            In conclusion, understanding climate is essential to comprehending the 
            world we live in. This extensive overview has covered key definitions 
            related to climate, various climate types, and the fundamental factors 
            that shape these climates.
          </p>
          <p>
            From the warm, humid conditions of equatorial climates to the extreme 
            cold of polar regions, each climate type presents unique characteristics 
            influenced by geographic and environmental factors. Latitude, altitude, 
            distance from oceans, ocean currents, prevailing winds, topography, 
            the Earth’s tilt and orbit, and human activities all play critical roles in 
            determining the climate of a region.
          </p>
          <p>
            As we continue to study and monitor climate patterns, it becomes 
            increasingly important to recognize the intricate connections between 
            these factors and the effects of climate change on our planet. 
            Understanding these dynamics not only enriches our knowledge but 
            also empowers us to take informed actions toward environmental 
            sustainability and the preservation of our ecosystems for future 
            generations.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Climate