import { useState } from 'react'
import './App.css'
import workshopLogo from '/workshop-logo.png'

function App() {
  const [activeSection, setActiveSection] = useState('overview')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const sections = {
    overview: 'Overview',
    emergency: 'Emergency',
    transport: 'Transport',
    locations: 'Locations',
    food: 'Food & Dining',
    culture: 'Culture Tips',
  }

  const handleSectionChange = (section) => {
    setActiveSection(section)
    setMobileMenuOpen(false) // Close mobile menu when section is selected
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-text">
            <h1>🇩🇪 Welcome to Munich!</h1>
            <p>DDAD CI TEAMS Workshop 2025 Guide</p>
          </div>
          <img 
            src={workshopLogo} 
            alt="Workshop Logo" 
            className="workshop-logo"
          />
        </div>
      </header>

      {/* Navigation */}
      <nav className="nav">
        {/* Desktop Navigation */}
        {Object.entries(sections).map(([key, label]) => (
          <button
            key={key}
            className={`nav-btn ${activeSection === key ? 'active' : ''}`}
            onClick={() => handleSectionChange(key)}
          >
            {label}
          </button>
        ))}
        
        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="mobile-menu-label">Navigation</span>
          <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        {Object.entries(sections).map(([key, label]) => (
          <button
            key={key}
            className={`nav-btn ${activeSection === key ? 'active' : ''}`}
            onClick={() => handleSectionChange(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Content */}
      <main className="content">
        {activeSection === 'overview' && <OverviewSection />}
        {activeSection === 'emergency' && <EmergencySection />}
        {activeSection === 'transport' && <TransportSection />}
        {activeSection === 'locations' && <LocationsSection />}
        {activeSection === 'food' && <FoodSection />}
        {activeSection === 'culture' && <CultureSection />}
      </main>
    </div>
  )
}

function OverviewSection() {
  return (
    <section className="section">
      <div className="info-card">
        <h3>🏢 Workshop Venues</h3>
        <div className="venue-item">
          <div className="venue-header">
            <strong>BMW Forschungs- und Innovationszentrum FIZ</strong>
            <button className="map-btn" onClick={() => window.open('https://maps.app.goo.gl/JCFymbmj5aFATt5v8', '_blank')}>
              📍 Open in Maps
            </button>
          </div>
          <p>📍 Frankfurter Ring 6, 80807 München</p>
        </div>
        
        <div className="venue-item">
          <div className="venue-header">
            <strong>BMW Autonomous Driving Campus</strong>
            <button className="map-btn" onClick={() => window.open('https://maps.app.goo.gl/mcqEc17NRqjqN5Ru5', '_blank')}>
              📍 Open in Maps
            </button>
          </div>
          <p>📍 Landshuter Straße 26, 85716 Unterschleißheim (Near Munich)</p>
        </div>
      </div>

      <div className="info-card">
        <h3>🌍 First Time in Germany?</h3>
        <p>This guide contains everything you need to know for a smooth stay in Munich! From emergency contacts to local customs, we've got you covered.</p>
        
        <div className="quick-facts">
          <div className="fact">
            <span>💶</span>
            <div>
              <strong>Currency</strong>
              <p>Euro (EUR)</p>
            </div>
          </div>
          <div className="fact">
            <span>🗣️</span>
            <div>
              <strong>Language</strong>
              <p>German (English widely spoken)</p>
            </div>
          </div>
          <div className="fact">
            <span>⚡</span>
            <div>
              <strong>Power Outlets</strong>
              <p>Type C & F (230V)</p>
            </div>
          </div>
          <div className="fact">
            <span>📱</span>
            <div>
              <strong>Emergency</strong>
              <p>112 (Police, Fire, Medical)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="weather-card">
        <h3>🌤️ July Weather in Munich</h3>
        <p>Expect warm summer weather with occasional rain. In the night it may cool down.</p>
        <div className="weather-info">
          <span>🌡️ 15-35°C (59-95°F)</span>
          <span>☔ Pack a light jacket & umbrella</span>
        </div>
      </div>
    </section>
  )
}

function EmergencySection() {
  return (
    <section className="section">
      <h2>🚨 Emergency Information</h2>
      
      <div className="emergency-card urgent">
        <h3>🚨 EMERGENCY NUMBERS</h3>
        <div className="emergency-number">
          <span className="number">112</span>
          <div>
            <strong>Police, Fire, Medical Emergency</strong>
            <p>Works from any phone, even without credit</p>
          </div>
        </div>
      </div>

      <div className="info-card">
        <h3>🏥 Healthcare</h3>
        <div className="service-item">
          <strong>Emergency Rooms (24/7)</strong>
          <p>München Klinik - Notfallzentrum Klinikum Schwabing (Close to FIZ)</p>
          <p>📍 <a href="https://maps.app.goo.gl/ongVzSUWm44j6QgS8" target="_blank">Kölner Pl. 1/Haus 5, 80804 München</a></p>
        </div>
        <div className="service-item">
          <strong>Pharmacy (Apotheke)</strong>
          <p>Delphin-Apotheke Antonia (Close to FIZ)</p>
          <p>📍 <a href="https://g.co/kgs/NzqtFvj" target="_blank">Illungshofstraße 21, 80807 München</a></p>
        </div>
      </div>

      <div className="info-card">
        <h3>🏛️ Your Embassy Contacts</h3>
        <div className="embassy-item">
          <strong>🇮🇳 Indian Consulate Munich</strong>
          <p>📞 <a href="tel:+498921023912">+49 89 210 239 12</a></p>
          <p>📍 <a href="https://maps.app.goo.gl/uwBHLZQqHGwrcnZs9" target="_blank">Widenmayerstrasse. 15, 80538 München</a></p>
        </div>
        <div className="embassy-item">
          <strong>🇵🇹 Portuguese Consulate Stuttgart (There is no embassy or consulate in Munich)</strong>
          <p>📞 <a href="tel:+49711227396">+49 711 227396</a></p>
          <p>📍 <a href="https://maps.app.goo.gl/PkiwABBkm7SePsfy8" target="_blank">Königstrasse 20, 70173 Stuttgart</a></p>
        </div>
      </div>
    </section>
  )
}

function TransportSection() {
  return (
    <section className="section">
      <h2>🚇 Getting Around Munich</h2>
      
      <div className="info-card">
        <h3>📱 Essential Apps</h3>
        <div className="app-grid">
          <div className="app-item">
            <strong>MVGO (Munich Transport)</strong>
            <p>Official app for tickets & schedules</p>
            <span className="download">📲 <a href="https://www.mvg.de/services/unsere-apps/mvgo.html" target="_blank">Download from App Store</a></span>
          </div>
          <div className="app-item">
            <strong>Google Maps</strong>
            <p>Navigation & public transport</p>
            <span className="download">📍 <a href="https://maps.app.goo.gl/e7wNqcmUMdeM26qC9" target="_blank">Munich</a></span>
          </div>
        </div>
      </div>

      <div className="info-card">
        <h3>🚊 Transport Types</h3>
        <div className="transport-grid">
          <div className="transport-item">
            <span>🚇</span>
            <div>
              <strong>U-Bahn (Subway)</strong>
              <p>Fast, frequent (5-20 min)</p>
              <p>Runs 4:00-01:00 (Fri/Sat until 2:00)</p>
            </div>
          </div>
          <div className="transport-item">
            <span>🚊</span>
            <div>
              <strong>Tram</strong>
              <p>Surface level, scenic routes</p>
              <p>Good for city center</p>
            </div>
          </div>
          <div className="transport-item">
            <span>🚌</span>
            <div>
              <strong>Bus</strong>
              <p>Covers all areas</p>
              <p>Night buses available</p>
            </div>
          </div>
          <div className="transport-item">
            <span>🚄</span>
            <div>
              <strong>S-Bahn (Regional)</strong>
              <p>To suburbs & airport</p>
              <p>Essential for Unterschleißheim</p>
            </div>
          </div>
        </div>
      </div>

      <div className="info-card">
        <h3>🛣️ Getting to Workshop Locations</h3>
        <div className="route-item">
          <strong>To BMW Forschungs- und Innovationszentrum FIZ</strong>
          <p>🚇 U2 to "Am Hart" (exit north for FIZ North, exit south for FIZ South) + 5 min walk</p>
          <p>🚌 Bus 174, 180, 295, 171, 172, 294 to "Am Hart" (FIZ South + FIZ North)</p>
          <p>🚌 Bus 172 to "BMW-FIZ" (FIZ South)</p>
          <p>🚌 Bus 178, 179, 180 to "Knorrstrasse" (FIZ South)</p>
        </div>
        <div className="route-item">
          <strong>To BMW Autonomous Driving Campus</strong>
          <p>🚄 S1 to "Unterschleißheim" + 15 min walk</p>
          <p>🚇 U2 to "Feldmoching" - transfer to S1 to "Unterschleißheim" + 15min walk</p>
          <p>🚗 About 30 min from city center</p>
        </div>
      </div>
    </section>
  )
}

function LocationsSection() {
  return (
    <section className="section">
      <h2>📍 Important Locations</h2>
      
      <div className="info-card">
        <h3>🏢 Workshop Venues</h3>
        <div className="venue-item">
          <div className="venue-header">
            <strong>BMW Forschungs- und Innovationszentrum FIZ</strong>
            <button className="map-btn" onClick={() => window.open('https://maps.app.goo.gl/JCFymbmj5aFATt5v8', '_blank')}>
              📍 Open in Maps
            </button>
          </div>
          <p>📍 Frankfurter Ring 6, 80807 München</p>
        </div>
        
        <div className="venue-item">
          <div className="venue-header">
            <strong>BMW Autonomous Driving Campus</strong>
            <button className="map-btn" onClick={() => window.open('https://maps.app.goo.gl/mcqEc17NRqjqN5Ru5', '_blank')}>
              📍 Open in Maps
            </button>
          </div>
          <p>📍 Landshuter Straße 26, 85716 Unterschleißheim (Near Munich)</p>
        </div>
      </div>

      <div className="info-card">
        <h3>🏛️ Key City Landmarks</h3>
        <div className="landmark-grid">
          <div className="landmark-item">
            <div className="venue-header">
              <strong>Marienplatz</strong>
              <button className="map-btn" onClick={() => window.open('https://maps.google.com/?q=Marienplatz+München', '_blank')}>
                📍 Open in Maps
              </button>
            </div>
            <p>Historic city center & main square</p>
            <p>🚇 U3/U6 or S1-S8 Marienplatz</p>
          </div>
          
          <div className="landmark-item">
            <div className="venue-header">
              <strong>Munich Central Station</strong>
              <button className="map-btn" onClick={() => window.open('https://maps.google.com/?q=München+Hauptbahnhof', '_blank')}>
                📍 Open in Maps
              </button>
            </div>
            <p>Main train station & transport hub</p>
            <p>🚇 All S-Bahn lines, U1/U2</p>
          </div>
          
          <div className="landmark-item">
            <div className="venue-header">
              <strong>English Garden</strong>
              <button className="map-btn" onClick={() => window.open('https://maps.google.com/?q=Englischer+Garten+München', '_blank')}>
                📍 Open in Maps
              </button>
            </div>
            <p>Large park perfect for relaxation</p>
            <p>🚇 U3/U6 Universität</p>
          </div>
          
          <div className="landmark-item">
            <div className="venue-header">
              <strong>BMW World & Museum</strong>
              <button className="map-btn" onClick={() => window.open('https://maps.google.com/?q=BMW+Welt+München', '_blank')}>
                📍 Open in Maps
              </button>
            </div>
            <p>Iconic automotive experience</p>
            <p>🚇 U3 Olympiazentrum</p>
          </div>
        </div>
      </div>

      <div className="info-card">
        <h3>🛒 Shopping & Services</h3>
        <div className="service-grid">
          <div className="service-item">
            <strong>Pedestrian Zone</strong>
            <p>Marienplatz → Karlsplatz</p>
            <p>Main shopping street</p>
          </div>
          <div className="service-item">
            <strong>Maximilianstrasse</strong>
            <p>Luxury shopping district</p>
            <p>Designer brands</p>
          </div>
          <div className="service-item">
            <strong>Viktualienmarkt</strong>
            <p>Traditional food market</p>
            <p>Fresh produce & specialties</p>
          </div>
          <div className="service-item">
            <strong>ATMs</strong>
            <p>Available everywhere</p>
            <p>Look for "Geldautomat"</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function FoodSection() {
  return (
    <section className="section">
      <h2>🍽️ Food & Dining Guide</h2>
      
      <div className="info-card">
        <h3>🥨 Must-Try German/Bavarian Food</h3>
        <div className="food-grid">
          <div className="food-item">
            <span>🥨</span>
            <div>
              <strong>Breze</strong>
              <p>Traditional Bavarian bread (pretzel) - crispy on the outside, soft inside, perfect with butter or mustard</p>
              <span className="price">€1-2</span>
            </div>
          </div>
          <div className="food-item">
            <span>🍞</span>
            <div>
              <strong>Brot</strong>
              <p>Germany is famous for the large variety of bread - from dark rye to crusty white, bread is a cornerstone of German cuisine</p>
              <span className="price">€3-7</span>
            </div>
          </div>
          <div className="food-item">
            <span>🍴</span>
            <div>
              <strong>Leberkäs-Semmel</strong>
              <p>Despite its name meaning "Liver Cheese Bun", it contains neither liver nor cheese - It's a type of meatloaf served hot with mustard in a bun</p>
              <span className="price">€2-3</span>
            </div>
          </div>
          <div className="food-item">
            <span>🍺</span>
            <div>
              <strong>Beer & Beer Garden</strong>
              <p>Traditional outdoor dining experience where locals gather to socialize, drink fresh beer, and enjoy the communal atmosphere under chestnut trees</p>
              <span className="price">€4-6</span>
            </div>
          </div>
          <div className="food-item">
            <span>🍴</span>
            <div>
              <strong>Schweinebraten</strong>
              <p>Roast pork, often served with sauerkraut and dumplings - This is considered the most iconic Bavarian main dish</p>
              <span className="price">€12-18</span>
            </div>
          </div>
          <div className="food-item">
            <span>🍴</span>
            <div>
              <strong>Weisswurst</strong>
              <p> Traditional white sausage made from veal and pork, typically eaten in the morning with sweet mustard and a pretzel</p>
              <span className="price">€6-8</span>
            </div>
          </div>
        </div>
      </div>

      <div className="info-card">
        <h3>🍽️ Dining</h3>
        <p>Selected restaurants</p>
        
        <div className="cuisine-section">
          <div className="restaurant-item">
            <strong>Wirtshaus Obacht</strong>
            <p>📍 <a href="https://g.co/kgs/87U51BQ" target="_blank">Schwindstraße 20, 80797 München</a></p>
            <p>Traditional Bavarian Cuisine</p>
          </div>
          <div className="restaurant-item">
            <strong>Weisses Bräuhaus</strong>
            <p>📍 <a href="https://g.co/kgs/p2nu1Mh" target="_blank">Tal 7, 80331 München</a></p>
            <p>Traditional Bavarian Cuisine</p>
          </div>
          <div className="restaurant-item">
            <strong>Faun</strong>
            <p>📍 <a href="https://maps.app.goo.gl/F2b4AiUDgbrVkzDW8" target="_blank">Hans-Sachs-Straße 17, 80469 München</a></p>
            <p>International / German Cuisine</p>
          </div>
          <div className="restaurant-item">
            <strong>Taxisgarten</strong>
            <p>📍 <a href="https://maps.app.goo.gl/VCVEjYvB6fXge9scA" target="_blank">Taxisstraße 12, 80637 München</a></p>
            <p>Bavarian Cuisine</p>
          </div>
          <div className="restaurant-item">
            <strong>Sappralott</strong>
            <p>📍 <a href="https://maps.app.goo.gl/2h3Jf53rRyme9eC79" target="_blank">Donnersbergerstraße 37, 80634 München</a></p>
            <p>Bavarian Cuisine</p>
          </div>
          <div className="restaurant-item">
            <strong>Burger Pub</strong>
            <p>📍 <a href="https://g.co/kgs/yAVW8cS" target="_blank">Milbertshofener Str. 34, 80807 München</a></p>
            <p>Burgers</p>
          </div>
          <div className="restaurant-item">
            <strong>Menya Ikko</strong>
            <p>📍 <a href="https://g.co/kgs/HtUnBY3" target="_blank">Knorrstraße 35, 80807 München</a></p>
            <p>Japanese Cuisine</p>
          </div>
          <div className="restaurant-item">
            <strong>Bamberger Haus</strong>
            <p>📍 <a href="https://g.co/kgs/25yStjP" target="_blank">Brunnerstraße 2, 80804 München</a></p>
            <p>European Cuisine</p>
          </div>
          <div className="restaurant-item">
            <strong>Tony`s EssBar</strong>
            <p>📍 <a href="https://g.co/kgs/k8hQQNk" target="_blank">Georgenschwaigstraße 42, 80807 München</a></p>
            <p>Italian/Internation Cuisine</p>
          </div>
          <div className="restaurant-item">
            <strong>Swaad Restaurant</strong>
            <p>📍 <a href="https://g.co/kgs/TDn9YFr" target="_blank">Berg-am-Laim-Straße 103, 81673 München</a></p>
            <p>Indian Cuisine</p>
          </div>
          <div className="restaurant-item">
            <strong>Restaurante o Portugal</strong>
            <p>📍 <a href="https://g.co/kgs/38s8KrH" target="_blank">Friedenstraße 26A, 81671 München</a></p>
            <p>Portugese Cuisine</p>
          </div>
          <div className="restaurant-item">
            <strong>Ziegelhaus</strong>
            <p>📍 <a href="https://g.co/kgs/vz2nHH4" target="_blank">Knorrstraße 172, 80937 München</a></p>
            <p>Tex-Mex-Barfood</p>
          </div>
        </div>
      </div>

      <div className="info-card">
        <h3>💰 Budget-Friendly Options</h3>
        <div className="budget-grid">
          <div className="budget-item">
            <strong>Döner Kebab</strong>
            <p>€6-8 - Quick, filling meal</p>
            <p>Available everywhere</p>
          </div>
          <div className="budget-item">
            <strong>Bakeries</strong>
            <p>€2-5 - Fresh sandwiches</p>
            <p>Look for "Bäckerei"</p>
          </div>
        </div>
      </div>

      <div className="info-card">
        <h3>☕ Coffee Culture</h3>
        <div className="coffee-info">
          <p>Germans love their coffee! Here's what to expect:</p>
          <div className="coffee-types">
            <div className="coffee-item">
              <strong>Coffee / Americano (Kaffee)</strong>
              <span>€2-3</span>
            </div>
            <div className="coffee-item">
              <strong>Cappuccino</strong>
              <span>€3-5</span>
            </div>
            <div className="coffee-item">
              <strong>Espresso</strong>
              <span>€1.50-2.50</span>
            </div>
          </div>
        </div>
      </div>

      <div className="info-card">
        <h3>🍽️ Dining Etiquette</h3>
        <div className="etiquette-tips">
          <div className="tip-item">
            <strong>🕐 Typical Meal Times</strong>
            <p>Lunch: 11-2 PM, Dinner: 6-9 PM</p>
          </div>
          <div className="tip-item">
            <strong>💰 Tipping</strong>
            <p>Round up or 5-10% in restaurants</p>
          </div>
          <div className="tip-item">
            <strong>🍻 Beer Gardens</strong>
            <p>You can bring your own food!</p>
          </div>
          <div className="tip-item">
            <strong>💧 Water</strong>
            <p>Tap water is safe, but usually not free in restaurants</p>
          </div>
        </div>
      </div>

      <div className="info-card">
        <h3>🍺 Bavarian Beer Culture</h3>
        <div className="budget-grid">
          <div className="budget-item">
            <strong>Beer Size</strong>
            <p>Ordering a normal beer refers to 0.5L</p>
            <p>Warning: Ordering a large Beer often refers to 1.0L, also called a "Mass Bier"</p>
            <p>HeadsUp: In Beergardens often only a "Mass Bier" is available</p>
          </div>
          <div className="budget-item">
            <strong>Beer Variation</strong>
            <p>Normal Beer: "Helles"</p>
            <p>Try out other beers like: "Dunkles" (dark beer) or "Weissbier" (wheat beer)</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CultureSection() {
  return (
    <section className="section">
      <h2>🇩🇪 German Culture & Etiquette</h2>
      
      <div className="info-card">
        <h3>🤝 Social Etiquette</h3>
        <div className="etiquette-grid">
          <div className="etiquette-item">
            <span>🤝</span>
            <div>
              <strong>Greetings</strong>
              <p>Firm handshake, direct eye contact</p>
              <p>"Hello/Hi" (or "Servus" - Bavarian) is universal</p>
            </div>
          </div>
          <div className="etiquette-item">
            <span>⏰</span>
            <div>
              <strong>Punctuality</strong>
              <p>Being on time is very important!</p>
              <p>Arrive 5-10 minutes early</p>
            </div>
          </div>
          <div className="etiquette-item">
            <span>🚪</span>
            <div>
              <strong>Personal Space</strong>
              <p>Germans value personal space</p>
              <p>Keep arm's length in conversations</p>
            </div>
          </div>
          <div className="etiquette-item">
            <span>🗣️</span>
            <div>
              <strong>Direct Communication</strong>
              <p>Germans are very direct and honest</p>
              <p>Don't take it personally!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="info-card">
        <h3>🏪 Shopping & Business Hours</h3>
        <div className="hours-info">
          <div className="day-hours">
            <strong>Monday-Saturday</strong>
            <span>9:00-20:00 (most shops)</span>
          </div>
          <div className="day-hours">
            <strong>Sunday</strong>
            <span>Closed (except restaurants, gas stations)</span>
          </div>
          <div className="day-hours">
            <strong>Supermarkets</strong>
            <span>8:00-20:00 (Monday-Saturday)</span>
          </div>
        </div>
        <p><strong>Important:</strong> Most shops close on Sundays! Stock up on Saturday.</p>
      </div>

      <div className="info-card">
        <h3>🚶‍♂️ Street & Public Behavior</h3>
        <div className="behavior-tips">
          <div className="tip-item">
            <strong>🚦 Traffic Lights</strong>
            <p>Always wait for green, even if no cars are coming</p>
          </div>
          <div className="tip-item">
            <strong>🚲 Bike Lanes</strong>
            <p>Don't walk in bike lanes (Important: Watch out for fast approaching cyclers!)</p>
          </div>
          <div className="tip-item">
            <strong>📱 Public Transport</strong>
            <p>Quiet conversations, no loud phone calls</p>
          </div>
          <div className="tip-item">
            <strong>🗑️ Recycling</strong>
            <p>Different bins for different materials</p>
          </div>
          <div className="tip-item">
            <strong>🚭 Smoking</strong>
            <p>Prohibited in public buildings, restaurants, bars, transport if not stated otherwise</p>
          </div>
        </div>
      </div>

      <div className="info-card">
        <h3>💳 Payment Methods</h3>
        <div className="payment-info">
          <div className="payment-method">
            <strong>💶 Cash (Bar)</strong>
            <p>Still widely used, especially for small amounts</p>
            <p>Always carry some cash!</p>
          </div>
          <div className="payment-method">
            <strong>💳 EC/Debit Cards</strong>
            <p>Most common electronic payment</p>
            <p>Not all places accept credit cards</p>
          </div>
          <div className="payment-method">
            <strong>📱 Contactless/Mobile Pay</strong>
            <p>Increasingly accepted</p>
            <p>Apple Pay, Google Pay work in most places</p>
          </div>
        </div>
      </div>

      <div className="info-card">
        <h3>🗣️ Useful German Phrases</h3>
        <div className="phrases-grid">
          <div className="phrase-item">
            <strong>Guten Tag</strong>
            <span>Good day / Hello</span>
          </div>
          <div className="phrase-item">
            <strong>Danke</strong>
            <span>Thank you</span>
          </div>
          <div className="phrase-item">
            <strong>Bitte</strong>
            <span>Please / You're welcome</span>
          </div>
          <div className="phrase-item">
            <strong>Entschuldigung</strong>
            <span>Excuse me / Sorry</span>
          </div>
          <div className="phrase-item">
            <strong>Sprechen Sie Englisch?</strong>
            <span>Do you speak English?</span>
          </div>
          <div className="phrase-item">
            <strong>Wo ist...?</strong>
            <span>Where is...?</span>
          </div>
          <div className="phrase-item">
            <strong>Hilfe!</strong>
            <span>Help!</span>
          </div>
          <div className="phrase-item">
            <strong>Auf Wiedersehen</strong>
            <span>Goodbye</span>
          </div>
          <div className="phrase-item">
            <strong>Ich hätte gern ein Helles!</strong>
            <span>I would like to have a beer</span>
          </div>
        </div>
      </div>

      <div className="info-card">
        <h3>🍺 Beer Garden Culture</h3>
        <p>Beer gardens are central to Munich culture - perfect for networking!</p>
        <div className="beer-garden-tips">
          <div className="tip-item">
            <strong>🪑 Seating</strong>
            <p>Shared tables are normal - just ask "Ist hier frei?" (Is this free?)</p>
          </div>
          <div className="tip-item">
            <strong>🥨 Food</strong>
            <p>You can bring your own food to most beer gardens!</p>
          </div>
          <div className="tip-item">
            <strong>🍺 Ordering</strong>
            <p>Order at the counter or wait for service</p>
          </div>
          <div className="tip-item">
            <strong>🌳 Atmosphere</strong>
            <p>Relaxed, family-friendly, great for conversations</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
