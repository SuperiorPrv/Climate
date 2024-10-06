import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";

const History = () => {
  return (
    <div style={{padding:"30px"}}>
      <h1>Climate History</h1>
      <p>
        The history of climate change is deeply intertwined with the concentration of greenhouse gases (GHGs) in the atmosphere. 
        Based on data from the U.S. Greenhouse Gas (GHG) Center and related sources, we can trace climate change from pre-industrial 
        times to the modern day, largely driven by changes in CO₂, methane (CH₄), and other GHG levels.
      </p>
      <h3>1. Pre-Industrial Climate and Natural Variability</h3>
      <p>
        Before the industrial era, climate changes occurred naturally over thousands to millions of years. These fluctuations were driven 
        by factors such as volcanic activity, solar radiation changes, and variations in Earth{"'"}s orbit, leading to alternating ice ages and 
        warmer interglacial periods. GHG levels, particularly CO₂, remained relatively stable during these times. According to ice core data, 
        atmospheric CO₂ levels fluctuated between 180 ppm during ice ages and 280 ppm during warmer periods, but never exceeded 
        these limits for thousands of years.
      </p>
      <h3>2. The Industrial Revolution and the Start of Human Impact</h3>
      <p>
        The Industrial Revolution in the late 18th century marked the beginning of human-caused climate change. This era saw a massive 
        increase in the burning of fossil fuels—coal, oil, and natural gas—for energy production, transportation, and industrial use. Data 
        from the U.S. GHG Center shows that CO₂ concentrations in the atmosphere began to rise steadily during this time, increasing 
        from pre-industrial levels of around 280 ppm to over 420 ppm today.
      </p>
      <p>
        With this rise in CO₂, other GHGs such as methane (from agriculture, landfills, and fossil fuel extraction) and nitrous oxide 
        (mainly from fertilizers) also began to accumulate in the atmosphere. Methane is especially potent, with a global warming 
        potential more than 25 times greater than CO₂ over a 100-year period. These increases began to disrupt the natural balance of the 
        Earth{"'"}s climate system.
      </p>
      <h3>3. 20th Century: Scientific Recognition and Evidence</h3>
      <p>
        The 20th century brought major advances in understanding climate change, supported by extensive GHG data. By the 1950s, 
        atmospheric scientists began to realize that the rapid increase in CO₂ and other GHGs was trapping heat in the atmosphere, 
        leading to the {'"greenhouse effect."'} This caused global temperatures to rise at an unprecedented rate. By the mid-20th century, 
        global temperatures had risen by approximately 0.5°C compared to pre-industrial levels.
      </p>
      <p>
        During this period, the U.S. GHG Center and other organizations began systematically measuring GHG emissions from various 
        sectors, such as energy, industry, and agriculture. They provided evidence that human activities were responsible for the majority 
        of the rise in global GHG concentrations. NASA, EPA, and other agencies involved in the U.S. GHG Center began using satellite and 
        ground-based measurements to track the increase in these gases.
      </p>
      <h3>4. Late 20th Century: Acceleration of Climate Change</h3>
      <p>
        By the 1980s and 1990s, the consequences of rising GHG concentrations became more evident. The global temperature had risen by approximately 0.8°C since the pre-industrial era, and scientists warned of potential catastrophic impacts if emissions continued unchecked. The U.S. GHG Center documented significant increases in methane emissions from fossil fuel extraction, particularly from natural gas operations and coal mining, as well as from livestock and rice paddies.
      </p>
      <p>
        Scientific models from the U.S. GHG Center began projecting future climate scenarios based on continued GHG emissions. These projections showed that without significant reductions in CO₂ and methane, global temperatures could rise by 2°C or more by the end of the 21st century, leading to severe impacts such as sea-level rise, more frequent heatwaves, and disruptions to ecosystems.
      </p>
      <h3>5. Modern Era: Climate Crisis and Mitigation Efforts</h3>
      <p>
        In the 21st century, GHG concentrations have reached historic highs, with CO₂ surpassing 420 ppm, and methane and nitrous oxide levels also reaching unprecedented levels. According to the U.S. GHG Center, human activities—burning fossil fuels, deforestation, and industrial agriculture—are responsible for the majority of these emissions. Global temperatures have already risen by about 1.1°C above pre-industrial levels, contributing to more extreme weather events, melting polar ice caps, and rising sea levels.
      </p>
      <p>
        The U.S. GHG Center continues to play a crucial role in monitoring and projecting the impacts of these emissions. Its data is used to support climate mitigation efforts, including the U.S.{"'"}s commitments to the Paris Agreement, which aims to limit global warming to well below 2°C, and ideally 1.5°C, above pre-industrial levels.
      </p>
      <p>
        Recent initiatives have focused on reducing methane emissions, given its high global warming potential. The Center tracks methane leaks from oil and gas operations and encourages measures to reduce emissions from agriculture, landfills, and wastewater treatment.
      </p>
      <h2>Conclusion</h2>
      <p>
        The history of climate change, driven by rising greenhouse gas concentrations, highlights the profound impact of human activities on the Earth{"'"}s climate system. The data and projections provided by the U.S. GHG Center show a clear trajectory: without significant reductions in CO₂, methane, and nitrous oxide, the planet faces increasingly severe impacts from climate change. Through this understanding, the U.S. GHG Center and other global efforts aim to mitigate these impacts and guide the world toward a more sustainable future.
      </p>
      <div style={{display:"flex", justifyContent:"space-between", marginTop:"40px"}}>
        <img style={{maxWidth:"20%", maxHeight:"200px"}} src={img1} alt="" />
        <img style={{maxWidth:"20%", maxHeight:"200px"}} src={img2} alt="" />
        <img style={{maxWidth:"20%", maxHeight:"200px"}} src={img3} alt="" />
        <img style={{maxWidth:"20%", maxHeight:"200px"}} src={img4} alt="" />
      </div>
    </div>
  )
}

export default History