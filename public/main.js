const sections = {
  about: `
    <h2>Antonio Santos</h2>
    <p>Software Developer Junior </p>
    Santarém, Portugal<br>
    <p>I am a final-year Software Development student with a strong interest in technology and problem-solving.
        Before moving into tech, I worked in Interior Design, specializing in 3D planning and creative project development. This experience gave me a sharp eye for detail
        and the ability to transform ideas into practical solutions.</p>

    <p>Today, I combine creativity with technical skills to build innovative digital solutions, always striving to improve as a developer and deliver meaningful work.</p>
    
    <div class="about-grid">
        <div>
            <h4 class="about-title" onclick="toggleDetails('hobbies-details')">Hobbies</h4>
            <div id="hobbies-details" class="about-details">
                <ul>
                    <li>Reading</li>
                    <li>Playing video games</li>
                    <li>Dogs</li>
                </ul>
            </div>
        </div>
        <div>
            <h4 class="about-title" onclick="toggleDetails('goals-details')">Goals</h4>
            <div id="goals-details" class="about-details">
                <ul>
                    <li>Become a better developer</li>
                    <li>Contribute to real projects</li>
                </ul>
            </div>
        </div>
    </div>

    <ul class="wrapper">
      <li class="icon linkedin">
        <a href="https://www.linkedin.com/in/as-software/" target="_blank">
          <span class="tooltip">Linkedin</span>
          <span><i class="fab fa-linkedin"></i></span>
        </a>
      </li>
      <li class="icon github">
        <a href="https://github.com/A-S95" target="_blank">
          <span class="tooltip">Github</span>
          <span><i class="fab fa-github"></i></span>
        </a>
      </li>
      <li class="icon portfolio">
        <a href="https://portfolio-as-azure.vercel.app/" target="_blank">
          <span class="tooltip">Portfolio</span>
          <span><i class="fa-solid fa-briefcase"></i></span>
        </a>
      </li>
    </ul>
  `,
  experience: `
    <h2>Experience</h2>
    
    <div class="experience-section">
      <h3 class="experience-header" onclick="toggleExperienceDetails('internships-details', this)">
        <i class="fas fa-chevron-right chevron-icon"></i> Internships
      </h3>
      <div id="internships-details" class="experience-content">
        <div class="job-entry">
          <h4>Siemens SA</h4>
          <p><strong>Role:</strong> Trainee, Smart Infrastructure</p>
          <p><strong>Period:</strong> June 2025 - September 2025</p>
          <ul>
            <li>Designed and implemented interactive, multi-page Power BI dashboards, incorporating user-focused features to enhance usability and reporting accessibility for various support teams.</li>
            <li> Built and managed comprehensive data models, collecting and transforming information from enterprise databases and external sources, and established calculated measures and KPIs to track performance and team efficiency.</li>
            <li>Maintained data accuracy and usability through thorough cleaning, validation, and transformation processes for complex datasets.</li>
            <li>Collaborated closely with end-users to gather requirements, clarify needs, and integrate feedback, contributing to continuous dashboard improvements.</li>
            <li>Supported the successful launch of an international project by collaborating with internal and external teams to align reporting standards and data requirements.</li>
            <br><b>Tools:</b> Power BI, SQL, Dashboards, Excel, Data Analysis.
          </ul>
        </div>
        <div class="job-entry">
          <h4>Fnac Saldanha</h4>
          <p><strong>Role:</strong> Trainee, IT Support</p>
          <p><strong>Period:</strong> July 2025 – September 2025</p>
          <ul>
            <li> Assisted customers with product selection, repairs, and maintenance services.</li>
            <li> Managed data backup/restoration and offered technical advice.</li>
            <li> Developed communication skills and sales experience.</li>
            <br><b>Tools:</b> Windows, MacOS, Restore & Backup Data, Repairs, Communication.
          </ul>
        </div>
      </div>
    </div>

    <div class="experience-section">
      <h3 class="experience-header" onclick="toggleExperienceDetails('job-details', this)">
        <i class="fas fa-chevron-right chevron-icon"></i> Job
      </h3>
      <div id="job-details" class="experience-content">
        <div class="job-entry">
          <h4>ACSCozinhas</h4>
          <p><strong>Role:</strong> Interior Designer</p>
          <p><strong>Period:</strong> March 2019 – May 2023</p>
          <ul>
            <li> Created detailed 3D drawings and floor plans using Teowin.</li>
            <li> Managed and maintained interior design projects with attention to technical and customer requirements.</li>
            <li> Gained experience with CAD-like software and customer communication</li>
            <br><b>Tools:</b> Teowin Software, 3D Design, Project Management, Communication.
          </ul>
        </div>
      </div>
    </div>
  `,
education: `
    <h2>Education</h2>
    
    <div class="education-section">
      <h3 class="experience-header" onclick="toggleExperienceDetails('school1-details', this)">
        <i class="fas fa-chevron-right chevron-icon"></i> IEFP 
      </h3>
      <div id="school1-details" class="experience-content">
        <div class="education-entry">
          <h4>Software Developer </h4>
          <p><strong>Lisbon, Portugal</strong></p>
          <p><strong>Period:</strong> 16 July 2023 - 05 September 2026</p>
          <ul>
            <li><b>Software Development:</b> Practical experience in various languages, such as C/C++, C#, Java, and Python, with a focus on web application development and code security.</li>
            <br><li><b>Systems and Network Management:</b> Knowledge of computer architecture, operating systems, and network administration, including an understanding of hybrid and cloud architectures.</li>
            <br><li><b>Databases:</b> Proficiency in the SQL language and in database administration for programmers, ensuring data management and integrity.</li>
            <br><li><b>Methodologies and Analysis:</b> The ability to apply programming methodology principles and perform systems analysis to develop efficient solutions from conception to implementation.</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="education-section">
      <h3 class="experience-header" onclick="toggleExperienceDetails('school2-details', this)">
        <i class="fas fa-chevron-right chevron-icon"></i> Escola Profissional Tomar
      </h3>
      <div id="school2-details" class="experience-content">
        <div class="education-entry">
          <h4>Eletronic and Telecomunication</h4>
          <p><strong>Tomar, Portugal</strong></p>
          <p><strong>Period:</strong> 2016 - 2018</p>
          <ul>
            <li><b>Network Analysis & Design:</b> Proficient in planning, configuring, and managing communication networks (fixed and mobile), ensuring their stability and efficiency.</li>
            <br><li><b>Hardware Installation & Maintenance:</b> Hands-on experience with the installation, diagnosis, and repair of electronic and telecommunication systems, ensuring long-term operational reliability.</li>
            <br><li><b>Automation & Control Systems:</b> Possess a strong understanding of control systems, automation, and microcontrollers, with an aptitude for optimizing technological processes and solutions.</li>
            <br><li><b>Security & Regulatory Compliance:</b> Trained to implement systems that adhere to strict safety and regulatory standards, protecting both people and infrastructure.</li>
          </ul>
        </div>
      </div>
    </div>
  `,
 skills: `
    <h2>Skills</h2>
    
    <div class="experience-section">
      <h3 class="experience-header" onclick="toggleExperienceDetails('programming-details', this)">
        <i class="fas fa-chevron-right chevron-icon"></i> Programming Languages
      </h3>
      <div id="programming-details" class="experience-content">
        <p>C/C++, Python, JavaScript, Cobol</p>
      </div>
    </div>
    
    <div class="experience-section">
      <h3 class="experience-header" onclick="toggleExperienceDetails('web-tech-details', this)">
        <i class="fas fa-chevron-right chevron-icon"></i> Web Technologies
      </h3>
      <div id="web-tech-details" class="experience-content">
        <p>HTML, CSS, PHP</p>
      </div>
    </div>
    
    <div class="experience-section">
      <h3 class="experience-header" onclick="toggleExperienceDetails('databases-details', this)">
        <i class="fas fa-chevron-right chevron-icon"></i> Database Management
      </h3>
      <div id="databases-details" class="experience-content">
        <p>SQL, MySQL</p>
      </div>
    </div>
    
    <div class="experience-section">
      <h3 class="experience-header" onclick="toggleExperienceDetails('other-skills-details', this)">
        <i class="fas fa-chevron-right chevron-icon"></i> Other Skills
      </h3>
      <div id="other-skills-details" class="experience-content">
        <p>Git, Power BI, Windows, Linux, Systems Analysis, Network Administration</p>
      </div>
    </div>
  `,
};

// This is the function that controls the theme change
function setTheme(theme) {
    const body = document.body;
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}

// Function to show the personalization window
function showPersonalizationWindow() {
    document.getElementById('personalization-window').classList.remove('hidden');
}

// Function to close the personalization window
function closePersonalizationWindow() {
    document.getElementById('personalization-window').classList.add('hidden');
}

// New function to set the theme and close the window
function setThemeAndClose(theme) {
    setTheme(theme);
    closePersonalizationWindow();
}

// Check for saved theme preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDark) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    // Initialize the "About" section as active
    showSection('about', document.querySelector('.sidebar .item.active'));
});

function showSection(section, element) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = sections[section];

    document.querySelectorAll('.sidebar .item').forEach(item => {
        item.classList.remove('active');
    });
    element.classList.add('active');
}

function toggleDetails(id) {
    const element = document.getElementById(id);
    const title = element.previousElementSibling;
    const chevron = title.querySelector('.chevron-icon');
    
    if (element.style.maxHeight) {
        element.style.maxHeight = null;
        chevron.style.transform = 'rotate(0deg)';
    } else {
        element.style.maxHeight = element.scrollHeight + "px";
        chevron.style.transform = 'rotate(90deg)';
    }
}


function toggleExperienceDetails(id, header) {
    const details = document.getElementById(id);
    const chevron = header.querySelector('.chevron-icon');

    if (details.style.maxHeight) {
        details.style.maxHeight = null;
        chevron.style.transform = 'rotate(0deg)';
    } else {
        details.style.maxHeight = details.scrollHeight + "px";
        chevron.style.transform = 'rotate(90deg)';
    }
}

// spotify widget
async function getSpotifyData() {
    const widget = document.getElementById('spotify-widget');

    try {
        // Agora, o teu site faz um pedido ao teu próprio servidor
        const response = await fetch('http://localhost:3000/api/spotify-data');
        const data = await response.json();

        // O resto do código é o mesmo, mas agora os dados vêm do teu servidor
        if (data.recenttracks && data.recenttracks.track[0]['@attr'] && data.recenttracks.track[0]['@attr'].nowplaying === "true") {
            const track = data.recenttracks.track[0];
            const artist = track.artist['#text'];
            const albumArt = track.image[2]['#text'];
            
            widget.classList.remove('offline');
            widget.style.backgroundImage = `url(${albumArt})`;
            
            widget.innerHTML = `
                <div class="spotify-content">
                    <p class="now-playing-text">Now Playing</p>
                    <p class="track-title">${track.name}</p>
                    <p class="artist-name">${artist}</p>
                </div>
            `;
        } else {
            widget.classList.add('offline');
            widget.style.backgroundImage = 'none';
            widget.innerHTML = `<p class="offline-text">Nothing is playing right now at Spotify</p>`;
        }
    } catch (error) {
        console.error('Erro a carregar dados do Spotify:', error);
        widget.classList.add('offline');
        widget.style.backgroundImage = 'none';
        widget.innerHTML = `<p class="offline-text">Error loading data.</p>`;
    }
}

getSpotifyData();
setInterval(getSpotifyData, 10000); // Atualiza a cada 10 segundos

// --- Funções para o botão de fechar ---
// Função para mostrar a janela de confirmação de fecho
function showConfirmationWindow() {
    document.getElementById('confirmation-window').classList.remove('hidden');
}

// Função para fechar a janela de confirmação (botão "No")
function closeConfirmationWindow() {
    document.getElementById('confirmation-window').classList.add('hidden');
}

// Função para fechar a página (botão "Yes")
function confirmTurnOff() {
    const mainPage = document.querySelector('.window');
    const statusbar = document.getElementById('status');

    closeConfirmationWindow();

    // Mostra a mensagem de fecho
    statusbar.innerHTML = `<p class="offline-text">Closing... (5)</p>`;

    // Aplica a classe de animação à janela principal
    mainPage.classList.add('turning-off');

    // Inicia a contagem regressiva e atualiza o statusbar
    let countdown = 5;
    const interval = setInterval(() => {
        countdown--;
        if (countdown > 0) {
            statusbar.innerHTML = `<p class="offline-text">Closing... (${countdown})</p>`;
        } else {
            clearInterval(interval);
            statusbar.innerHTML = `<p class="offline-text">Closed.</p>`;
        }
    }, 1000);

    // Espera a animação terminar (5 segundos) e tenta fechar o separador
    setTimeout(() => {
        // Tenta fechar a aba do navegador
        // A maioria dos navegadores modernos tem restrições de segurança
        // e só permite fechar abas que foram abertas por scripts.
        if (window.opener && !window.opener.closed) {
            window.close();
        } else if (window.top) {
            window.top.close();
        }
    }, 5000);
}