
  const motivatePhrase = [ "Confía en ti mismo, sigue adelante y MANTENED LA CALMA.",
  "Eres una persona talentosa y capaz MANTENED LA CALMA.",
  "Sabías que ser amable contigo mismo es esencial para tu felicidad?",
  "Aprende a amarte a ti mismo, crece emocionalmente.",
  "Sabías que la vida es una oportunidad para ser feliz y realizado?",
  "Cada día es una oportunidad para ser mejor A MOVER EL BOTE ;).",
  "Sabías que no tener miedo de ser tú mismo te llevará al éxito?",
  "Perdona y deja ir, avanza hacia un futuro feliz.",
  "Sabías que el fracaso es una oportunidad para crecer y mejorar?",
  "La vida es un viaje de auto-descubrimiento y crecimiento.",
  "Sabías que si meditas 15 minutos al día, mejorarás tu concentración y reducirás el estrés?",
  "Haz un hábito de ser positivo y verás cómo florece tu vida.",
  "Sé amable contigo mismo, mereces ser feliz.",
  "Crecer es un proceso continuo, no te detengas.",
  "Sabías que si te rodeas de personas positivas, aumentarás tu felicidad y motivación?",
  "La vida es un regalo, disfrútala al máximo.",
  "Aprende a perdonar, libera tu corazón.",
  "Eres único y especial, resalta tus habilidades.",
  "Sabías que si aprendes algo nuevo todos los días, te mantendrás joven y motivado?",
  "Crece emocionalmente y encuentra la felicidad interior.",
  "Sabías que si ayudas a los demás, te sentirás más satisfecho y feliz?",
  "El éxito es un camino, no un destino.",
  "No te rindas, tienes mucho potencial MANTENED LA CALMA.",
  "te desconectas de las redes sociales y te concentras en el momento presente, te sentirás más relajado y en paz",
  "Aprende a quererte, la autoaceptación es clave.",
  "La vida es una oportunidad, aprovechala al máximo.",
  "Sabías que si lees 5 hojas de un libro al día, mejorarás tu conocimiento y habilidades de lectura?",
  "Sé amable contigo mismo, perdona y avanza.",
  "Sabías que si aprendes a delegar tareas, tendrás más tiempo para concentrarte en tus fortalezas?",
  "La felicidad es un hábito, cultívalo día a día.",
  "Sabías que si te desafías a ti mismo, mejorarás tus habilidades y autoestima?",
  "La vida es un camino de crecimiento y aprendizaje.",
  "No tengas miedo de ser tú mismo, eres genial.",
  "Aprende a amarte a ti mismo, encuentra la paz interior.",
  "El fracaso es una oportunidad para crecer.",
  "Sabías que tus habilidades y talentos son únicos y especiales?",
  "Crea hábitos positivos y verás cómo mejora tu vida.",
  "La vida es corta, no te detengas.",
  "Sabías que perdonar y dejar ir puede liberar tu corazón y mente?",
  "Perdona y deja ir, vive en el presente.",
  "Confía en ti, tienes todo lo necesario para triunfar.",
  "Sabías que la autoaceptación es la clave para amar la vida?",
  "Eres una persona valiosa y digna de amor.",
  "La vida es un regalo, aprende a disfrutarla.",
  "Sabías que si haces ejercicio regularmente, mejorarás tu salud física y mental?",
  "El éxito viene de la constancia y el trabajo duro.",
  "Crece emocionalmente, descubre tu verdadero yo.",
  "Sabías que si te ríes y disfrutas, mejorarás tu estado de ánimo y bienestar?",
  "Eres capaz de lograr lo que te propongas.",
  "Sabías que confiar en ti mismo es clave para seguir adelante?",
  "No te rindas, tienes todo lo que necesitas para triunfar ",
  "Sabías que amarte a ti mismo es la base para un crecimiento emocional saludable?",
  "Sabías que los hábitos positivos pueden transformar tu vida?",
  "Sabías que muchos autores famosos han hablado sobre el crecimiento personal y el auto-descubrimiento?",
  "Sabías que el crecimiento es un proceso continuo y emocionante?",
  "Sabías que la vida es un camino de aprendizaje y descubrimiento?",
  "Sabías que si te levantas temprano, tendrás un comienzo productivo y positivo del día?",
  "Sabías que si estableces metas y objetivos, te sentirás más enfocado y motivado?",
  "Sabías que si duermes lo suficiente, tendrás más energía y claridad mental durante el día?",
  "Sabías que si organizas tu tiempo y espacio, serás más eficiente y productivo?",
  "Sabías que si te involucras en actividades que te apasionan, te sentirás más feliz y motivado?",
  "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. - Albert Schweitzer",
  "Si crees en ti mismo y tienes la determinación, no hay nada que te impida lograr tus metas.- Kobe Bryant",
  "No puedes controlar todo lo que te pasa, pero sí puedes controlar cómo reaccionas a ello. '- Oprah Winfrey",
  "Sabías que si comes saludable, te sentirás más energético y fuerte?",
  "No es la cantidad de tiempo que vivimos, sino la calidad de vida que llevamos. - Steve Jobs",
  "Sabías que si escribes tus pensamientos y sentimientos, te ayudará a procesar tus emociones?",
  "No te detengas en el fracaso, es solo una oportunidad para comenzar de nuevo con más inteligencia. - Henry Ford",
  "Sabías que si practicas la gratitud, te sentirás más feliz y satisfecho con la vida?",
  "Si quieres algo que nunca has tenido, tienes que hacer algo que nunca has hecho. - Thomas Jefferson",
  "Sabías que si te tomas un tiempo para ti, mejorarás tu bienestar emocional?",
  "Cada día es una nueva oportunidad para cambiar tu vida. - Tony Robbins",
  "Sabías que si practicas la resiliencia, serás más capaz de enfrentar los desafíos con optimismo?",
  "No es la situación en sí misma la que nos hace infelices o felices, es nuestra actitud hacia ella. - Dalai Lama",
  "Sabías que si aprendes a decir 'no', tendrás más tiempo para lo que realmente importa?",
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día. - Robert Collier.",
  "Sabías que si aprendes a ser más paciente, tendrás más tolerancia y menos estrés?",


]

const funnyCommit=()=>{const message=motivatePhrase[Math.floor(Math.random()*motivatePhrase.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);}

    module.exports ={
        funnyCommit
    };