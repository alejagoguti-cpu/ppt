export interface ThesisSection {
  id: string
  title: string
  subtitle?: string
  type: 'intro' | 'context' | 'analysis' | 'comparison' | 'case-study' | 'conclusion'
  city?: 'hong-kong' | 'shenzhen' | 'both'
  content: string
  visualizations?: string[]
  references?: string[]
  order: number
}

export const thesisSections: ThesisSection[] = [
  // INTRODUCTION & CONTEXT
  {
    id: 'intro-1',
    title: 'Hong Kong & Shenzhen',
    subtitle: 'Two Systems, One Region',
    type: 'intro',
    city: 'both',
    content: `A comparative analysis of two contrasting urban development models in the Pearl River Delta. One city governed by Common Law and market-driven capitalism. The other shaped by state-led socialist development.`,
    visualizations: ['skyline-comparison', 'map-location'],
    order: 1,
  },
  {
    id: 'hk-history-1',
    title: 'Hong Kong: Colonial Legacy',
    subtitle: 'From Trading Post to Global Financial Hub',
    type: 'context',
    city: 'hong-kong',
    content: `Hong Kong began as small fishing and agricultural villages in a strategic coastal position. In 1842, after the First Opium War, it came under British control. Its harbor rapidly accelerated trade and connections with other Asian cities, establishing the foundation for its transformation into a global financial center.`,
    references: ['First Opium War', 'Treaty of Nanking'],
    order: 2,
  },
  {
    id: 'hk-history-2',
    title: 'Hong Kong: 20th Century Industrialization',
    type: 'context',
    city: 'hong-kong',
    content: `During the 20th century, Hong Kong industrialized rapidly and received massive population flows. Scarcity of available land led to compact, vertical growth patterns. The city became a manufacturing hub and financial center, developing iconic high-rise architecture.`,
    visualizations: ['density-chart', 'population-growth'],
    order: 3,
  },
  {
    id: 'sz-history-1',
    title: 'Shenzhen: From Rural Area to SEZ',
    subtitle: 'The Special Economic Zone Revolution',
    type: 'context',
    city: 'shenzhen',
    content: `Shenzhen began as a rural territory with small villages and agricultural zones along the Hong Kong border. In 1980, China designated it as a Special Economic Zone to experiment with new economic policies and attract foreign investment. This decision would transform it into one of the world's fastest-growing cities.`,
    references: ['Reform and Opening-Up', 'Deng Xiaoping'],
    order: 4,
  },
  {
    id: 'sz-history-2',
    title: 'Shenzhen: From Shanzhai to Innovation',
    subtitle: 'The Manufacturing to Technology Transition',
    type: 'context',
    city: 'shenzhen',
    content: `Shenzhen evolved from manufacturing and imitation ('shanzhai') to become a center for hardware innovation and technology development. The Huaqiangbei electronics district symbolizes this transition from low-cost production to cutting-edge innovation leadership.`,
    visualizations: ['innovation-timeline', 'rd-investment'],
    order: 5,
  },

  // ECONOMIC SYSTEMS
  {
    id: 'econ-hk-1',
    title: 'Hong Kong: Financial Hub Model',
    type: 'analysis',
    city: 'hong-kong',
    content: `Hong Kong's economy is dominated by financial services and real estate. The city hosts the Hong Kong Exchange (HKEX), one of the world's largest stock exchanges. Its economy relies on:

• Competitively low tax regime
• Common Law legal system
• Four pillars: trade/logistics, financial services, professional services, tourism
• Open capital markets
• Personal Data Protection Ordinance (PDPO)`,
    visualizations: ['economic-structure', 'four-pillars'],
    order: 6,
  },
  {
    id: 'econ-hk-2',
    title: 'Hong Kong: Innovation Ecosystem',
    type: 'analysis',
    city: 'hong-kong',
    content: `Hong Kong's innovation infrastructure includes:

• Hong Kong Science Park
• Cyberport (digital technology hub)
• Hong Kong-Shenzhen Innovation & Technology Park
• Innovation and Technology Office (established 2015)

However, R&D intensity has historically remained low compared to international standards, with recent efforts to increase investment through government programs and startup support.`,
    visualizations: ['startup-ecosystem', 'hksp-data'],
    order: 7,
  },
  {
    id: 'econ-sz-1',
    title: 'Shenzhen: State-Corporate Model',
    type: 'analysis',
    city: 'shenzhen',
    content: `Shenzhen's economy is characterized by state direction and corporate execution:

• R&D intensity: 6.46% of GDP (2024) - highest in China
• Government marks strategic industries
• Anchor companies: Huawei, Tencent, DJI, BYD, ZTE, BGI
• 20 emerging strategic industry clusters
• ChiNext (Nasdaq-style exchange in Shenzhen)
• More than 90% of R&D spending comes from enterprises`,
    visualizations: ['rd-intensity', 'anchor-companies'],
    order: 8,
  },
  {
    id: 'econ-sz-2',
    title: 'Shenzhen: Manufacturing at Scale',
    type: 'analysis',
    city: 'shenzhen',
    content: `Shenzhen produces approximately 90% of the world's consumer electronics. The city's manufacturing prowess is built on:

• Huaqiangbei electronic district ecosystem
• Deep supply chains
• Low production costs
• Rapid iteration and innovation cycles
• Integration of design, manufacturing, and distribution`,
    visualizations: ['global-electronics-share', 'supply-chain'],
    order: 9,
  },

  // INEQUALITY & DEVELOPMENT GOALS
  {
    id: 'ods-hk-1',
    title: 'Hong Kong: ODS 1 - Ending Poverty',
    type: 'analysis',
    city: 'hong-kong',
    content: `Hong Kong's official poverty rate (17.1% in 2012) masks severe inequality. Despite high GDP per capita, the city faces:

• Low tax regime reducing public resources
• Extreme income gaps between households
• 'Cage homes' - subdivided housing with minimal living conditions
• Structural fiscal deficit risk
• Most expensive real estate market globally`,
    visualizations: ['poverty-rate', 'housing-inequality'],
    order: 10,
  },
  {
    id: 'ods-hk-2',
    title: 'Hong Kong: ODS 10 - Reducing Inequalities',
    type: 'analysis',
    city: 'hong-kong',
    content: `Gini coefficient: 0.539-0.54

Key indicators of inequality:
• Extreme income gaps between households
• Real estate market inaccessibility for median workers
• Limited affordable housing policy
• Income concentration in financial sector
• Limited intergenerational mobility

The financial-real estate dominated economy concentrates wealth at the top.`,
    visualizations: ['gini-chart', 'income-distribution'],
    order: 11,
  },
  {
    id: 'ods-sz-1',
    title: 'Shenzhen: ODS 8 - Decent Work & Economic Growth',
    type: 'analysis',
    city: 'shenzhen',
    content: `Shenzhen's rapid growth has created employment but with challenges:

• Minimum wage violations detected
• Non-hukou population excluded from social security
• Urban villages where rural collectives remain landowners
• Floating population ('non-hukou') lacks full urban rights
• Manufacturing wages under pressure from automation`,
    visualizations: ['employment-sectors', 'hukou-system'],
    order: 12,
  },
  {
    id: 'ods-sz-2',
    title: 'Shenzhen: ODS 10 - Reducing Inequalities',
    type: 'analysis',
    city: 'shenzhen',
    content: `Gini coefficient: ~0.5 (recent estimates) / 0.56 (2006 survey)

Inequality drivers:
• Hukou system excluding non-residents from benefits
• Rural collective landholdings vs. formal property
• Manufacturing wealth concentration
• Tech sector wage premiums
• Urban-rural divide partially preserved`,
    visualizations: ['gini-comparison', 'hukou-impact'],
    order: 13,
  },

  // GOVERNANCE & INSTITUTIONS
  {
    id: 'gov-hk-1',
    title: 'Hong Kong: Common Law System',
    type: 'analysis',
    city: 'hong-kong',
    content: `Hong Kong's governance framework:

• Independent judiciary (until 2020)
• Common Law legal tradition
• ICAC (Independent Commission Against Corruption) since 1974
• District Councils for local participation
• Legislative Council (LegCo) - mixed election model
• Crown Land adapted to 'Government Land' (1998)

This system provided strong institutional checks and business confidence.`,
    visualizations: ['governance-structure', 'institutions-timeline'],
    order: 14,
  },
  {
    id: 'gov-hk-2',
    title: 'Hong Kong: Political Changes 2019-2021',
    type: 'analysis',
    city: 'hong-kong',
    content: `Significant institutional shifts:

• 2019-2020 Protests against extradition bill
• 2020 National Security Law implemented
• 2020-2021 Expulsion of legislators and mass resignations
• 2021 Electoral reform introducing 'patriots governing Hong Kong'
• Constitutional reinterpretation limiting autonomy

The Basic Law's 'One Country, Two Systems' principle (1990/1997) faces challenges until 2047.`,
    visualizations: ['political-timeline', 'governance-changes'],
    order: 15,
  },
  {
    id: 'gov-sz-1',
    title: 'Shenzhen: State-Led Governance Model',
    type: 'analysis',
    city: 'shenzhen',
    content: `Shenzhen's governance structure:

• Delegated legislative power (1992)
• Resident Committees for local organization
• Qianhai Authority (2010) for cross-border cooperation
• Municipal People's Assembly (NPC-style)
• State-Owned Assets Commission (SASAC)
• SASAC-controlled mega-corporations (Shenzhen Metro Group)

Power concentrates in state and party organs.`,
    visualizations: ['governance-structure', 'power-concentration'],
    order: 16,
  },
  {
    id: 'gov-sz-2',
    title: 'Shenzhen: Strategic Planning System',
    type: 'analysis',
    city: 'shenzhen',
    content: `State direction of strategic development:

• Top-down innovation policy
• Identified strategic industries receive support
• Master planning from central authority
• 2013 land reform enabling property markets
• 2021 Qianhai Plan for cross-border integration
• Hukou system controls population distribution

This enables rapid, coordinated development but concentrates decision power.`,
    visualizations: ['strategic-planning', 'land-reform-impact'],
    order: 17,
  },

  // URBAN MODELS
  {
    id: 'urban-hk-1',
    title: 'Hong Kong: Vertical Density',
    type: 'analysis',
    city: 'hong-kong',
    content: `Hong Kong's urban form reflects scarcity:

• Extreme vertical density (world's highest)
• 40% of territory protected as rural parks and reserves
• Lantau Tomorrow Vision - ambitious land reclamation project
• Dominance of high-rise buildings
• Limited brownfield redevelopment
• Mai Po marshes - Ramsar site (1995) limits expansion

The city solved density through height, not sprawl.`,
    visualizations: ['density-map', 'building-heights'],
    order: 18,
  },
  {
    id: 'urban-hk-2',
    title: 'Hong Kong: Land Leasehold System',
    type: 'analysis',
    city: 'hong-kong',
    content: `Unique property system:

• Government Land leasehold system (adapted from Crown Land)
• Statutory planning system with zoning
• Competitive tax regime attracts investment
• Property sector dominates economy
• Limited affordable housing despite development

This system concentrates land value with government and developers.`,
    visualizations: ['land-system', 'lease-terms'],
    order: 19,
  },
  {
    id: 'urban-sz-1',
    title: 'Shenzhen: Rapid Horizontal Growth',
    type: 'analysis',
    city: 'shenzhen',
    content: `Shenzhen expanded outward while modernizing:

• Sponge City program for water management
• Coastal risk adaptation (typhoons, sea-level rise)
• Urban villages ('chacheng') preserve older settlement patterns
• Dongjiang River basin dependency (83 km transfer system)
• Manganese forests loss (35-50% decline) from development

The city prioritized speed over preservation.`,
    visualizations: ['growth-map', 'sponge-city'],
    order: 20,
  },
  {
    id: 'urban-sz-2',
    title: 'Shenzhen: Land Reform & State Control',
    type: 'analysis',
    city: 'shenzhen',
    content: `2013 land reform enabled property markets while maintaining state control:

• Agricultural land converted to urban use
• Rural collective holdings permitted (urban villages)
• Commercial registration reform (2013)
• Property-financed fiscal model
• SOE-dominated urban development corporations

This enables rapid development with state capacity control.`,
    visualizations: ['land-reform', 'collective-vs-state'],
    order: 21,
  },

  // ENVIRONMENTAL & RESOURCE DEPENDENCIES
  {
    id: 'env-both-1',
    title: 'Water Dependency: The Dongjiang System',
    type: 'analysis',
    city: 'both',
    content: `Both cities depend on the Dongjiang River system:

• Hong Kong imports 70-80% of water from Dongjiang
• Shenzhen receives water via 83 km transfer system
• Regional drought stress (2021-2022)
• Climate change increases pressure
• Competing demands from Guangdong province
• Limited local water sources for both cities

This creates structural interdependence and vulnerability.`,
    visualizations: ['water-system-map', 'water-stress'],
    order: 22,
  },
  {
    id: 'env-hk-1',
    title: 'Hong Kong: Ecological Reserves',
    type: 'analysis',
    city: 'hong-kong',
    content: `Hong Kong protects 40% of its territory:

• Mai Po Wetlands (Ramsar site, 1995)
• 23 Country Parks
• Marine conservation areas
• Biodiversity hotspot status
• Tension between conservation and development

These reserves limit development but preserve ecosystems.`,
    visualizations: ['protected-areas-map', 'biodiversity'],
    order: 23,
  },
  {
    id: 'env-sz-1',
    title: 'Shenzhen: Ecosystem Loss & Recovery',
    type: 'analysis',
    city: 'shenzhen',
    content: `Rapid development altered ecosystems:

• Mangrove forests: 35-50% global loss from development
• Futian Mangrove Reserve attempts recovery
• Coastal wetland pressures from urbanization
• Sea-level rise risks to coastal zones
• Typhoon preparation systems
• Ecological restoration efforts ongoing

Development prioritized over conservation initially.`,
    visualizations: ['mangrove-map', 'ecosystem-timeline'],
    order: 24,
  },

  // INNOVATION COMPARISON
  {
    id: 'innovation-both-1',
    title: 'R&D Investment Comparison',
    type: 'comparison',
    city: 'both',
    content: `Hong Kong vs Shenzhen R&D trajectories:

Hong Kong:
• Historically low R&D intensity
• Recent government push (2015 onwards)
• Government-led innovation policy fragmented
• Cyberport and Science Park focus on startups
• Challenges attracting tech talent

Shenzhen:
• 6.46% R&D intensity of GDP (2024)
• >90% from private enterprise investment
• Government identifies strategic sectors
• Anchor companies drive ecosystem
• Rapid iteration and scaling capability`,
    visualizations: ['rd-comparison', 'intensity-chart'],
    order: 25,
  },
  {
    id: 'innovation-hk-1',
    title: 'Hong Kong: Startup Ecosystem',
    type: 'analysis',
    city: 'hong-kong',
    content: `Recent innovation efforts:

• Cyberport: digital technology hub
• Hong Kong Science Park: biotech and cleantech
• Ecosystem expanding since 2015
• Top Talent Pass Scheme (2022) to attract researchers
• Talent exodus concerns (brain drain 2020-2022)
• Dependency on mainland cooperation

Emerging but facing competitive pressure.`,
    visualizations: ['startup-landscape', 'incubator-data'],
    order: 26,
  },
  {
    id: 'innovation-sz-1',
    title: 'Shenzhen: Anchor Company Model',
    type: 'analysis',
    city: 'shenzhen',
    content: `Ecosystem built around strategic champions:

Anchor Companies:
• Huawei (telecommunications)
• Tencent (internet/gaming)
• DJI (drones)
• BYD (electric vehicles)
• ZTE (telecommunications)
• BGI (genomics)

These drive supply chains, attract talent, and enable cross-sector innovation.`,
    visualizations: ['anchor-companies-map', 'market-cap'],
    order: 27,
  },
  {
    id: 'innovation-sz-2',
    title: 'Shenzhen: Huaqiangbei Hardware Ecosystem',
    type: 'analysis',
    city: 'shenzhen',
    content: `The electronics district represents unique innovation model:

• Maker culture and rapid prototyping
• Component sourcing from global suppliers
• Fast iteration cycles (weeks not months)
• Low barriers to entry for startups
• Integration of design, manufacture, distribution
• 90% of world electronics produced in/near Shenzhen

This enables continuous innovation at scale.`,
    visualizations: ['huaqiangbei-network', 'supply-chain-visualization'],
    order: 28,
  },

  // CASE STUDIES - COOPERATION ZONES
  {
    id: 'cooperation-1',
    title: 'Hong Kong-Shenzhen Cooperation',
    subtitle: 'Two Systems, One Region',
    type: 'case-study',
    city: 'both',
    content: `Two distinct governance models attempting cooperation:

Question: Can cooperation overcome system differences?

The cooperation zones represent:
• Qianhai (Shenzhen side)
• Lok Ma Chau Loop (Hong Kong side)
• Hong Kong-Shenzhen Innovation & Technology Park

These zones test cross-border integration while preserving system autonomy.`,
    visualizations: ['cooperation-map', 'zone-comparison'],
    order: 29,
  },
  {
    id: 'qianhai-1',
    title: 'Qianhai: Pilot Zone Design',
    type: 'case-study',
    city: 'shenzhen',
    content: `Qianhai Special Cooperation Zone (2010-present):

Purpose: Test closer integration with Hong Kong

Features:
• Qianhai Authority (2010) established
• 2021 Qianhai Plan expanded scope
• Designed to operate under rules facilitating HK connection
• Financial services, trade, logistics focus
• Professional services opening to HK firms
• Hukou relaxation for HK residents

Result: Partial integration while maintaining system distinction.`,
    visualizations: ['qianhai-map', 'policy-timeline'],
    order: 30,
  },
  {
    id: 'lok-ma-chau-1',
    title: 'Lok Ma Chau Loop: Transboundary Park',
    type: 'case-study',
    city: 'hong-kong',
    content: `Hong Kong-Shenzhen Innovation & Technology Park:

Location: Lok Ma Chau Loop (Hong Kong side)

Purpose: Cross-border innovation cooperation

Design:
• Hong Kong zone: operates under HK common law
• Shenzhen zone: operates under Shenzhen regulations
• Shared innovation infrastructure
• Complementary regulatory frameworks
• Part of Greater Bay Area integration

Challenge: System differences require continuous negotiation.`,
    visualizations: ['lok-ma-chau-map', 'park-layout'],
    order: 31,
  },
  {
    id: 'international-case-1',
    title: 'Çatalhöyük: Ancient Urban Self-Organization',
    type: 'case-study',
    city: 'both',
    content: `Historical comparison revealing urban governance patterns:

Çatalhöyük (8000-7000 BCE):
• Early urban settlement (Turkey)
• Dense housing without explicit hierarchy
• Self-organized coordination
• No evidence of central authority
• Collective decision-making implied
• Material equality across households

Question: Was self-organization the baseline? Is hierarchy necessary?`,
    visualizations: ['catalhoyuk-reconstruction', 'governance-comparison'],
    order: 32,
  },

  // BOGOTA CASE STUDIES
  {
    id: 'bogota-context',
    title: 'Bogotá: Urban Self-Organization & Absorption',
    subtitle: 'Patio Bonito & El Amparo Case Studies',
    type: 'case-study',
    city: 'both',
    content: `Examining self-organized neighborhoods in Bogotá through comparative lens:

Two neighborhoods tracking organization over time:
1. Patio Bonito (1985-2006)
2. El Amparo (1991-2006)

Question: Does incorporation into formal systems destroy self-organization?
Or: Is hierarchy the inevitable path for urban integration?`,
    visualizations: ['bogota-map', 'timeline-both'],
    order: 33,
  },
  {
    id: 'patio-bonito-1',
    title: 'Patio Bonito: Self-Organization Timeline',
    type: 'case-study',
    city: 'both',
    content: `1985-1991: Formation and Self-Organization

Patio Bonito emerged as self-organized neighborhood:
• Community-led settlement
• JACs (Juntas de Acción Comunal) - grassroots organizations
• Collective decision-making
• Self-governance capacity
• Local problem-solving mechanisms
• Community cohesion

This period demonstrates autonomous urban organization capability.`,
    visualizations: ['patio-bonito-phase1', 'jac-structure'],
    order: 34,
  },
  {
    id: 'patio-bonito-2',
    title: 'Patio Bonito: Formalization (1991-2006)',
    type: 'case-study',
    city: 'both',
    content: `1991-2006: Integration into Formal System

Article 9 introduced: Elementos Locales del Modelo de Ocupación Territorial
(Local Elements of Territorial Occupation Model)

Formal programs introduced:
• Article 566: Connectivity, regreening, climate emergency
• Article 567: Decarbonization of mobility
• Article 568: Vitality and care programs

Result: Self-organization absorbed into state programs?

Key question: Did local autonomy survive or get replaced by hierarchical planning?`,
    visualizations: ['patio-bonito-phase2', 'absorption-model'],
    order: 35,
  },
  {
    id: 'el-amparo-1',
    title: 'El Amparo: Comparative Self-Organization',
    type: 'case-study',
    city: 'both',
    content: `1991-2006: El Amparo Formation

Emerged slightly later than Patio Bonito:
• Similar self-organization patterns
• JACs as coordination mechanism
• Community-driven development
• Local agency and decision-making
• Settlement on marginal land
• Collective problem-solving

Parallel evolution to Patio Bonito in different context.`,
    visualizations: ['el-amparo-phase1', 'settlement-pattern'],
    order: 36,
  },
  {
    id: 'el-amparo-2',
    title: 'El Amparo: Integration Question',
    type: 'case-study',
    city: 'both',
    content: `2006-Present: Same Formalization Process?

The same formal framework applied:
• Same Articles (9, 566, 567, 568) govern development
• Strategic Actions designed as normative imposition
• Not as interface with local JACs
• Centralized decision-making replaces local autonomy

Central Question:
Could "Strategic Actions" be designed WITH community concept in mind?
Rather than replacing local capacity?`,
    visualizations: ['el-amparo-phase2', 'formalization-comparison'],
    order: 37,
  },

  // CORABASTOS ANALYSIS
  {
    id: 'corabastos-1',
    title: 'Corabastos Market: Silent Power Concentration',
    subtitle: 'The Data Hub Problem',
    type: 'analysis',
    city: 'both',
    content: `Corabastos is Bogotá's largest produce market:

Traditional structure:
• Distributed decision-making
• Multiple vendors and networks
• Price signals from market
• Collective regulation
• Transparent price discovery

The Problem: When centralization happened silently`,
    visualizations: ['corabastos-network-before', 'market-structure'],
    order: 38,
  },
  {
    id: 'corabastos-2',
    title: 'Corabastos: The Centralization Question',
    type: 'analysis',
    city: 'both',
    content: `Central Question (reframed):

"What's wrong with Corabastos?" is the wrong question.

Better question:
"In how many OTHER nodes of the Kennedy network has this same SILENT concentration of decision-making power already occurred?"

This reveals the systemic pattern:
• Technology enables centralization
• Data flows to single points
• User agencies disappear from decision-making
• No explicit decision to centralize was ever made
• It simply happened through infrastructure

Key Insight: Cities face repeated silent centralization unless actively designing for distributed agency.`,
    visualizations: ['network-centralization', 'power-concentration-diagram'],
    order: 39,
  },

  // SMART CITIES ANALYSIS
  {
    id: 'smart-cities-1',
    title: 'Smart Cities: Competing Models',
    type: 'analysis',
    city: 'both',
    content: `Smart cities promise technology-enabled urban improvement:

Common Definition:
"Cities that use technology and data to improve mobility, energy efficiency, sustainability, and quality of life"

BUT: Implementation reveals competing visions:

Hong Kong Smart City Blueprint 2.0 (2020):
"Embrace innovation and technology to build a world-famed Smart Hong Kong characterised by a strong economy and high quality of living"

Framing: Technology = commercial competitiveness

Shenzhen Approach:
Technology = top-down optimization
State identifies efficient configurations
Implemented through corporate execution

Fundamental difference:
• HK: Technology serves commercial markets
• Shenzhen: Technology serves state planning`,
    visualizations: ['smart-city-models', 'framing-comparison'],
    order: 40,
  },
  {
    id: 'smart-cities-2',
    title: 'Smart Cities: The Hidden Centralization',
    type: 'analysis',
    city: 'both',
    content: `Critical observation about "smart" infrastructure:

The Silent Concentration Pattern:
1. City adopts smart infrastructure
2. Real-time data flows to central hub
3. Infrastructure optimizes around centralized intelligence
4. Individual agencies become followers of central decisions
5. No explicit "centralization decision" was made
6. It emerges from technical architecture

Corabastos and Shenzhen reveal same pattern:
• Efficiency gains come from centralized coordination
• Distributed agency decreases
• Power concentrates without explicit consent

Question for Hong Kong & Shenzhen smart city projects:
Who controls the data? Who makes the decisions that optimize the system?`,
    visualizations: ['data-flow-diagram', 'centralization-risk'],
    order: 41,
  },

  // SYNTHESIS & CONCLUSIONS
  {
    id: 'synthesis-1',
    title: 'Comparative Institutional Analysis',
    type: 'conclusion',
    city: 'both',
    content: `Hong Kong and Shenzhen represent two institutional responses to similar urban challenges:

Hong Kong (Common Law Model):
• Market-driven price signals
• Distributed decision-making among actors
• Regulatory frameworks enable but don't direct
• Individual agency preserved
• Innovation limited by regulatory constraints
• Inequality reflects market outcomes

Shenzhen (State-Corporate Model):
• Central planning identifies priorities
• Corporate execution implements state vision
• Rapid coordination and scaling
• Individual agency incorporated into state objectives
• Innovation accelerated by state direction
• Inequality reflects planning decisions

Each builds "the half of the system the other cannot build by its own legal framework"`,
    visualizations: ['institutional-comparison', 'decision-making-models'],
    order: 42,
  },
  {
    id: 'synthesis-2',
    title: 'Innovation Paradox',
    type: 'conclusion',
    city: 'both',
    content: `Critical insight about innovation and planning:

"Innovation emerges from diversity and uncertainty.
Centralized planning tends to reduce both."

Yet Shenzhen's top-down model produces innovation:
• By concentrating resources on strategic sectors
• By enabling rapid iteration at scale
• By protecting experiments from market pressure
• By maintaining long-term commitment

Hong Kong's distributed model enables:
• Continuous market discovery
• Rapid response to demand shifts
• Experimentation without permission
• Individual entrepreneurship

Paradox: Both systems innovate, but through opposite mechanisms.`,
    visualizations: ['innovation-mechanisms', 'diversity-efficiency-tradeoff'],
    order: 43,
  },
  {
    id: 'synthesis-3',
    title: 'Infrastructure and Risk',
    type: 'conclusion',
    city: 'both',
    content: `Centralizing infrastructure for efficiency concentrates risk:

Shenzhen's model:
• Unified supply chains
• Coordinated systems
• Single points of failure multiply
• System-wide vulnerability to disruptions
• Resilience depends on state capacity

Hong Kong's model:
• Distributed suppliers
• Multiple competing paths
• Redundancy built in
• More resilient to partial failures
• But less efficient at scale

Trade-off: Efficiency vs Resilience

2020-2024 disruptions revealed:
• Supply chain fragility in centralized systems
• But also higher adaptive capacity of HK financial system
• Both models face different vulnerabilities`,
    visualizations: ['risk-comparison', 'resilience-models'],
    order: 44,
  },
  {
    id: 'conclusions-1',
    title: 'Cooperation as Complementarity',
    type: 'conclusion',
    city: 'both',
    content: `Hong Kong-Shenzhen cooperation reveals possibility:

NOT: One system will absorb the other
BUT: Systems can be complementary

Manufacturing at scale (Shenzhen):
• Cannot exist under HK regulatory constraints
• Needs centralized planning and coordination
• Requires state capacity for infrastructure

Financial optimization (Hong Kong):
• Cannot exist under Shenzhen system
• Needs market price signals
• Requires independent adjudication

Cooperation zones work because:
• Each system does what it does best
• Geography enables mutual benefit
• System differences are assets, not liabilities`,
    visualizations: ['complementarity-diagram', 'cooperation-gains'],
    order: 45,
  },
  {
    id: 'conclusions-2',
    title: 'Self-Organization vs Hierarchy',
    type: 'conclusion',
    city: 'both',
    content: `From Patio Bonito to Corabastos to Smart Cities:

The persistent question: Is hierarchy inevitable?

Evidence suggests:
• Self-organization can emerge spontaneously (Çatalhöyük, Patio Bonito)
• Scaling to city-level requires coordination
• Coordination tends to centralize authority
• Centralization reduces local agency
• But enables system-level optimization

False choice: Self-organization OR hierarchy
True possibility: Designed cooperation

Recommendation for urban design:
Strategic Actions should be designed AS INTERFACES with communities
Not AS REPLACEMENTS for local decision-making

JACs (community organizations) could remain decision-makers
With formal system providing resources/coordination
Not hierarchical direction`,
    visualizations: ['organization-spectrum', 'cooperation-design'],
    order: 46,
  },
  {
    id: 'conclusions-3',
    title: 'Data, Infrastructure, Power',
    type: 'conclusion',
    city: 'both',
    content: `The smart cities future requires conscious design:

Current trajectory (Corabastos pattern):
• City adopts smart infrastructure
• Data centralizes without explicit decision
• Power concentrates silently
• Distributed agencies disappear
• "Efficiency" achieved through centralization

Alternative possibility:
• Design infrastructure for distributed decision-making
• Data nodes remain semi-autonomous
• Coordination happens through negotiation
• Explicit decisions about centralization
• "Wisdom of crowds" preserved

Question for Hong Kong, Shenzhen, and cities globally:

When digitalizing the city, who decides what gets optimized?
And whose interests does that optimization serve?`,
    visualizations: ['data-governance-models', 'distributed-vs-centralized'],
    order: 47,
  },
  {
    id: 'conclusion-final',
    title: 'Final Synthesis',
    subtitle: 'What Hong Kong & Shenzhen Teach Urban Systems',
    type: 'conclusion',
    city: 'both',
    content: `Hong Kong and Shenzhen represent not competition but complementarity:

Two systems addressing the same question differently:
"How do you organize 7+ million people in a small region to prosperity?"

Hong Kong's answer:
• Preserve individual agency through rules
• Let markets discover solutions
• Accept inequality as market outcome
• Maintain institutional independence

Shenzhen's answer:
• Coordinate through state planning
• Target solutions to identified problems
• Accept concentration of authority
• Enable rapid scaling

The deeper lesson extends to:
• Urban governance globally
• Corporate organization
• Digital infrastructure design
• Democratic participation

Core insight:
Neither system optimizes everything.
Each trades different goods to different groups.
The trade-offs are structural, not accidental.

Cities of the future must consciously design which trade-offs matter most.
And to whom.`,
    visualizations: ['synthesis-timeline', 'tradeoff-matrix'],
    order: 48,
  },
  {
    id: 'research-methods',
    title: 'Methodology & Sources',
    type: 'conclusion',
    city: 'both',
    content: `Research approach:

Primary sources:
• Hong Kong Basic Law (1990/1997)
• Shenzhen municipal documents
• Economic data (World Bank, IMF)
• UN Sustainable Development Goals framework
• Geographic and demographic data

Case studies:
• Qualitative analysis of Bogotá neighborhoods
• Historical reconstruction (Çatalhöyük)
• Institutional comparison framework

Analytical framework:
• Institutional economics
• Urban political economy
• Comparative governance systems
• Environmental sustainability analysis
• Network and data governance

Limitations acknowledged:
• Ongoing political changes in Hong Kong (post-2020)
• Rapid development in Shenzhen outpacing analysis
• Limited direct fieldwork in case study areas
• Western-centric theoretical frameworks

Future research directions:
• Longitudinal tracking of cooperation zone outcomes
• Detailed study of smart city implementations
• Comparative analysis with other dual-system regions`,
    order: 49,
  },
  {
    id: 'thanks',
    title: 'Thank You for Reading',
    subtitle: 'Gracias por ver',
    type: 'conclusion',
    city: 'both',
    content: `This thesis explores how two radically different systems navigate shared challenges.

The hope is not to crown a winner.
But to understand the trade-offs each system makes.
And what we can learn from living at the boundary.

Future questions to pursue:
• Can cooperation models scale beyond Hong Kong-Shenzhen?
• How do we preserve self-organization while enabling coordination?
• What digital infrastructure enables distributed decision-making?
• Who decides what gets optimized in smart cities?

The last question is perhaps most important:
When cities become smart, smart for whom?`,
    order: 50,
  },
]

export function getSectionsByCity(city: 'hong-kong' | 'shenzhen' | 'both') {
  return thesisSections.filter(s => !s.city || s.city === city).sort((a, b) => a.order - b.order)
}

export function getSectionsByType(type: ThesisSection['type']) {
  return thesisSections.filter(s => s.type === type).sort((a, b) => a.order - b.order)
}

export function getSectionById(id: string) {
  return thesisSections.find(s => s.id === id)
}
