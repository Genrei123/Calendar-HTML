const current = document.querySelector(".month");
const days = document.querySelector(".days");
const icons = document.querySelectorAll(".icons span");

let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May",
"June", "July", "August", "September", "October", "November",
"December"];

const calendar = () => 
{
    let firstDay = new Date(currentYear, currentMonth, 1).getDay();
    let lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    let lastMonthD = new Date(currentYear, currentMonth, 0 ).getDate();
    let day = "";

    for (let i = firstDay; i > 0; i--)
    {
        day += `<li>${lastMonthD - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDate; i++)
    {
        day += `<li>${i}</li>`;
    }

    current.innerText = `${months[currentMonth]} ${currentYear}`;
    days.innerHTML = day;
} 
calendar();

const link = ["https://drive.google.com/uc?export=view&id=1lhJve8FoSVYH0bnOaCh3amcw7cifjZ5U", "https://drive.google.com/uc?export=view&id=1ou_vDSDLoC-bZVzQ030gn8FQgizDKBox", "https://drive.google.com/uc?export=view&id=1vIXnbPSkXt20n2NVbcvIwaZDsLE7XrJo",
"https://drive.google.com/uc?export=view&id=1OgfVGUtJDjhp1BWshT-Fhe5-PF82d_A8", "https://drive.google.com/uc?export=view&id=1u36mTXCNmmGqaNJfmTXEx84x98dWgSSV", "https://drive.google.com/uc?export=view&id=1sbx_j_lOH3YAW6y_-WK09XNbZn3jU-Aj",
"https://drive.google.com/uc?export=view&id=1imjH-jUvqMZMIE9s04g1BqveaRUExo4m", "https://drive.google.com/uc?export=view&id=1Q9xeSFxxEOYQ0XCNrIw2oD9NTB3tRDum", "https://drive.google.com/uc?export=view&id=11cz4mePfiNxVBIYbYuldR4iQZc1tx2DS",
"https://drive.google.com/uc?export=view&id=1_BAMk2eb76vegEZNcZN9GRPDHANg3fDr", "https://drive.google.com/uc?export=view&id=1ZGsJPH-VsHh6bjAPFQ-ej4IErKPhatRZ", "https://drive.google.com/uc?export=view&id=1MgWoHeWFYrt_9dQDjwg3MYA4IU-EnDMt"]

icons.forEach(icon => {
    icon.addEventListener("click", () => {

        currentMonth = icon.id === "back" ? currentMonth - 1 : currentMonth + 1;

        if (currentMonth < 0)
        {
            currentMonth = 11;
            calendar();
        }

        if (currentMonth > 11)
        {
            currentMonth = 0;
            calendar();
        }

        document.body.style.backgroundImage = "url(" + link[currentMonth] + ")";
        calendar();
    })
});

