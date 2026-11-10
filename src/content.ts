/**
 * Todo o conteúdo editável da landing page fica aqui.
 * Itens marcados com [A CONFIRMAR] vieram da LP antiga ou estão sem dado oficial.
 */

export const site = {
  name: "Sorria Vila Prudente",
  tagline: "Transformando sorrisos todos os dias",
  doctor: "Dr. Guilherme Bogado",
  cro: "CRO 152.024 SP",
  croClinic: "CRO Clínica 16927", // [A CONFIRMAR]
  phoneDisplay: "(11) 94307-1333",
  phoneDigits: "5511943071333",
  instagramHandle: "@sorriavilaprudente",
  instagramUrl: "https://www.instagram.com/sorriavilaprudente",
  address: {
    street: "Rua Ibitirama, 996",
    district: "Vila Prudente",
    city: "São Paulo",
    state: "SP",
    zip: "03134-001",
  },
  // [A CONFIRMAR] nota e total vieram da LP antiga; trocar pelos números atuais do Google.
  google: { rating: 4.5, total: 255 },
  // [A CONFIRMAR] horário de atendimento. Deixe null para esconder.
  hours: null as string | null,
};

export const whatsappMessage = "Olá, vim através do site e gostaria de saber mais";

export const whatsappUrl = `https://api.whatsapp.com/send?phone=${site.phoneDigits}&text=${encodeURIComponent(
  whatsappMessage,
)}`;

const addressQuery = encodeURIComponent(
  `${site.address.street}, ${site.address.city}, ${site.address.zip}, Brasil`,
);

export const mapsEmbedUrl = `https://www.google.com/maps?q=${addressQuery}&hl=pt-BR&z=16&output=embed`;
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${addressQuery}`;
export const googleReviewsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Sorria Vila Prudente Odontologia",
)}`;

export const menu = [
  { label: "Início", href: "#inicio" },
  { label: "Procedimentos", href: "#procedimentos" },
  { label: "Lentes", href: "#lentes" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao" },
];

// Oferta em destaque logo abaixo do hero. "Esta semana" e o número de vagas precisam ser atualizados
// pela clínica, senão a oferta fica desatualizada.
export const offer = {
  badge: "Oferta da semana",
  title: "Avaliação gratuita de implante esta semana",
  text: "Raio-X digital incluído. Diagnóstico de osso, gengiva e candidatura. Sem compromisso e sem custo.",
  spots: "Apenas 3 vagas",
  cta: "Quero minha avaliação gratuita",
  ctaShort: "Quero avaliação gratuita", // só em celulares estreitos, para caber em uma linha
};

export const marquee = [
  "Implantes",
  "Lentes de contato dental",
  "Clareamento",
  "Vila Prudente",
  "Atendimento humanizado",
];

export const procedures = [
  {
    id: "implantes",
    number: "01",
    title: "Implante dentário",
    text: "Reponha dentes perdidos com mais firmeza para mastigar, sorrir e falar sem preocupação. Avaliamos osso, gengiva e saúde geral antes de indicar o melhor caminho.",
    image: "procedimentos/implante",
    alt: "Modelo em corte de um implante dentário de titânio fixado no osso, com a coroa de porcelana",
    extras: ["Implante imediato", "Enxerto ósseo", "Coroa sobre implante", "Protocolo All-on-4"],
  },
  {
    id: "lentes",
    number: "02",
    title: "Lentes de contato dental",
    text: "Lâminas finas e personalizadas para harmonizar cor, formato e proporção dos dentes, com o sorriso planejado antes de começar.",
    image: "procedimentos/lentes",
    alt: "Sorriso com lentes de contato dental: dentes brancos, alinhados e naturais",
    extras: [],
  },
  {
    id: "clareamento",
    number: "03",
    title: "Clareamento dental",
    text: "Dentes mais claros com acompanhamento profissional, cuidando do conforto durante o tratamento e do resultado ao longo do tempo.",
    image: "procedimentos/clareamento",
    alt: "Sorriso ao lado de uma escala de cores de dentes usada para avaliar o clareamento dental",
    extras: [],
  },
];

export const lensCases = [
  { id: "caso-1", before: "lentes/caso-1-antes", after: "lentes/caso-1-depois", label: "Caso 1" },
  { id: "caso-2", before: "lentes/caso-2-antes", after: "lentes/caso-2-depois", label: "Caso 2" },
  { id: "caso-3", before: "lentes/caso-3-antes", after: "lentes/caso-3-depois", label: "Caso 3" },
];

export const lensPoints = [
  "Planejamento do sorriso antes de qualquer procedimento",
  "Cor, formato e proporção sob medida para o seu rosto",
  "Acompanhamento direto com o Dr. Guilherme Bogado",
];

export const doctorPoints = [
  { title: "Atendimento humanizado", text: "Paciência para explicar cada etapa e tirar todas as dúvidas, inclusive de quem tem medo de dentista." },
  { title: "Diagnóstico claro", text: "Você sai da primeira consulta sabendo o que precisa ser feito, em que ordem e quanto custa." },
  { title: "Clínica organizada e pontual", text: "Ambiente limpo, acolhedor e com horários respeitados, da recepção ao consultório." },
];

export const steps = [
  { title: "Chame no WhatsApp", text: "Conte o que você deseja e escolha o melhor horário." },
  { title: "Avaliação com diagnóstico", text: "Conversa, exames e análise do seu caso com o Dr. Guilherme." },
  { title: "Plano e orçamento transparentes", text: "Você conhece as opções, as etapas e os valores antes de decidir." },
];

/**
 * [A CONFIRMAR] Avaliações copiadas da LP antiga, só as 3 que tinham foto de perfil do Google.
 * Troque por avaliações atuais (ou ligue na Google Places API mantendo este formato).
 */
export const reviews = [
  {
    name: "Joao Rodrigues",
    when: "um mês atrás",
    rating: 5,
    text: "Indico sem sombra de dúvida, atendimento especializado e humanizado, preço justo e profissionais capacitados da recepção até os consultórios. Não teria como ter uma experiência melhor, muito obrigado a toda equipe que se empenha em fazer do atendimento uma experiência inesquecível, um sonho realizado!",
  },
  {
    name: "Sulivam Cobein",
    when: "um mês atrás",
    rating: 5,
    text: "Desde o primeiro contato, fui recebido com extrema cordialidade pela Giovanna na recepção. O tratamento com o Dr. Guilherme tem sido impecável. É raro encontrar um profissional que alie tanto conhecimento técnico a um atendimento tão humanizado. A clínica é organizada, pontual e pratica um preço justo pela alta qualidade que entrega. Recomendo 100%!",
  },
  {
    name: "Reinaldo Tadeu Silva",
    when: "2 meses atrás",
    rating: 5,
    text: "Entrei em contato com a clínica e fui prontamente bem atendido pela atendente Giovanna. De entrada já se percebe a limpeza e organização do local. O atendimento realmente é muito bom. Pude perceber a diferença absurda na qualidade do trabalho comparado aos anteriores.",
  },
];

export const faq = [
  {
    q: "Implante dentário dói?",
    a: "Durante o procedimento, não. Usamos anestesia local, então você sente pressão, mas não dor. Depois da cirurgia pode haver um leve desconforto nos primeiros dias, controlado com analgésico comum conforme orientação do dentista.",
  },
  {
    q: "Quanto tempo dura o tratamento com implante?",
    a: "Varia de caso para caso. De forma geral, há a cirurgia de colocação, um período de integração do implante ao osso e, por fim, a instalação da coroa definitiva. Na avaliação você recebe um prazo realista para o seu caso.",
  },
  {
    q: "Sou candidato ao implante? E se eu tiver pouco osso?",
    a: "A maioria das pessoas pode ser avaliada. Analisamos osso, gengiva e saúde geral. Mesmo com perda óssea, existem protocolos como o enxerto ósseo. Só o exame confirma o melhor caminho.",
  },
  {
    q: "Lentes de contato dental e clareamento servem para mim?",
    a: "Depende da cor, do formato e da saúde dos seus dentes. Na avaliação o Dr. Guilherme explica o que cada opção pode entregar e qual faz mais sentido para o seu objetivo.",
  },
  {
    q: "Quanto custa? Vocês parcelam?",
    a: "O valor depende do que cada paciente precisa. Apresentamos o orçamento de forma transparente na avaliação e conversamos sobre as formas de pagamento disponíveis.",
  },
  {
    q: "Tenho muito medo de dentista. E agora?",
    a: "Você não está sozinho. O atendimento aqui é calmo e humanizado, com cada etapa explicada antes de acontecer. Você pode começar só conhecendo a clínica e tirando dúvidas.",
  },
];
