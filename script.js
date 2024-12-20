// Array com os nomes dos dias da semana
const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

// Função para gerar o calendário do mês atual
function generateCalendar() {
    const today = new Date(); // Data de hoje
    const currentYear = today.getFullYear(); // Ano atual
    const currentMonth = today.getMonth(); // Mês atual (0-11)

    // Exibe o mês e o ano no cabeçalho
    const calendarHeader = document.getElementById('calendar-header');
    const monthNames = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    calendarHeader.innerHTML = `${monthNames[currentMonth]} ${currentYear}`;

    // Cria a estrutura do calendário
    const calendarContainer = document.getElementById('calendario');
    calendarContainer.innerHTML = ""; // Limpa o calendário antes de renderizar

    // Adiciona os dias da semana no calendário
    daysOfWeek.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');
        dayElement.textContent = day;
        calendarContainer.appendChild(dayElement);
    });

    // Número de dias no mês atual
    const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Primeiro dia do mês (dia da semana em que o mês começa)
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    // Preenche os dias do mês
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDay = document.createElement('div');
        calendarContainer.appendChild(emptyDay); // Cria espaços vazios antes do primeiro dia
    }

    // Adiciona os dias do mês ao calendário
    for (let i = 1; i <= totalDaysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');
        dayElement.textContent = i;

        // Marca o dia de hoje
        if (i === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
            dayElement.classList.add('today');
        }

        // Adiciona evento de clique para mostrar as postagens
        dayElement.addEventListener('click', () => showQuoteForDay(i));

        calendarContainer.appendChild(dayElement);
    }
}

// Função para exibir a postagem do dia clicado
function showQuoteForDay(day) {
    const posts = [
        { date: "2024-12-20", quote: "Acredite em si mesmo e tudo será possível.", image: "https://via.placeholder.com/600x400/FFD700/000000?text=Acredite+em+si+mesmo" },
        { date: "2024-12-21", quote: "Sua energia é o seu maior recurso.", image: "https://via.placeholder.com/600x400/FFD700/000000?text=Sua+energia+é+o+seu+maior+recurso" },
        { date: "2024-12-22", quote: "O único limite para alcançar seus sonhos é você.", image: "https://via.placeholder.com/600x400/FFD700/000000?text=O+único+limite+é+você" }
    ];

    const post = posts.find(p => {
        const postDate = new Date(p.date);
        return postDate.getDate() === day && postDate.getMonth() === new Date().getMonth();
    });

    if (post) {
        document.querySelector('.quote-image').src = post.image;
        document.querySelector('.quote').textContent = `"${post.quote}"`;
    } else {
        alert('Postagem para esse dia não disponível.');
    }
}

// Inicializa o calendário ao carregar a página
document.addEventListener('DOMContentLoaded', generateCalendar);
