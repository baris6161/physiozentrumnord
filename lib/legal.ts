// Rechtstexte, aus der bestehenden Seite uebernommen (reference/).
// Hinweis: Der Datenschutztext stammt vom alten Duda-Auftritt und nennt
// Cookies, Google Analytics und extern geladene Google Web Fonts. Die neue
// Seite ist cookielos, hostet Fonts selbst und schaltet keine Werbung. Der
// Text sollte durch die Praxis bzw. deren Datenschutzbeauftragten an das neue
// Setup angepasst werden.

export type LegalBlock =
  | { type: "h"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] };

export const datenschutz: LegalBlock[] = [
  { type: "h", text: "Einführung" },
  {
    type: "p",
    text: "In diesen Datenschutzbestimmungen stellt Physiotherapie Zentrum Nord seine Vorgehensweise bezüglich der von Benutzern erfassten Daten, die auf unsere Webseite unter www.krankengymnastik-in-hannover.de zugreifen oder uns auf andere Weise personenbezogene Daten bereitstellen (gemeinsam: Benutzer), dar.",
  },
  {
    type: "p",
    text: "Zuständige Behörde im Sinne der Datenschutz-Grundverordnung (DSGVO): Die Landesbeauftragte für den Datenschutz Niedersachsen, Barbara Thiel.",
  },
  { type: "h", text: "Benutzerrechte" },
  { type: "p", text: "Sie haben folgende Rechte:" },
  {
    type: "list",
    items: [
      "Eine Bestätigung, ob und inwieweit Ihre personenbezogenen Daten verwendet und verarbeitet werden, sowie den Zugriff auf die über Sie gespeicherten personenbezogenen Daten und zusätzliche Informationen anfordern.",
      "Eine Kopie der personenbezogenen Daten, die Sie uns freiwillig bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format anfordern.",
      "Eine Berichtigung der personenbezogenen Daten, die wir von Ihnen gespeichert haben, anfordern.",
      "Das Löschen Ihrer personenbezogenen Daten beantragen.",
      "Der Verarbeitung Ihrer personenbezogenen Daten durch uns widersprechen.",
      "Die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten durch uns beantragen.",
      "Eine Beschwerde bei einer Aufsichtsbehörde einreichen.",
    ],
  },
  {
    type: "p",
    text: "Beachten Sie jedoch, dass diese Rechte nicht uneingeschränkt gelten, sondern unseren eigenen rechtmäßigen Interessen sowie behördlichen Vorschriften unterliegen.",
  },
  {
    type: "p",
    text: "Wenn Sie eines der hier aufgeführten Rechte in Anspruch nehmen möchten oder weitere Informationen wünschen, wenden Sie sich an unseren Datenschutzbeauftragten: Tareck Fares, info@krankengymnastik-in-hannover.de.",
  },
  { type: "h", text: "Speicherung" },
  {
    type: "p",
    text: "Wir speichern Ihre personenbezogenen Daten so lange, wie es für die Bereitstellung unserer Services, die Einhaltung rechtlicher Verpflichtungen sowie die Beilegung von Streitigkeiten und die Durchsetzung unserer Richtlinien erforderlich ist. Die Aufbewahrungsfristen richten sich nach der Art der erfassten Daten und dem Zweck, für den diese Daten erfasst wurden, wobei sowohl die fallspezifischen Gegebenheiten als auch die Notwendigkeit berücksichtigt werden, veraltete, nicht genutzte Informationen baldmöglichst zu löschen. Datensätze mit personenbezogenen Daten von Kunden, Dokumente über die Kontoeinrichtung, Mitteilungen und andere Daten speichern wir gemäß geltender Gesetze und Vorschriften.",
  },
  {
    type: "p",
    text: "Wir können jederzeit und in unserem alleinigen Ermessen unvollständige oder unrichtige Daten korrigieren, vervollständigen oder entfernen.",
  },
  { type: "h", text: "Grundlage für die Datenerfassung" },
  {
    type: "p",
    text: "Die Verarbeitung Ihrer personenbezogenen Daten, also jeglicher Daten, die mit vertretbaren Mitteln eine Identifizierung Ihrer Person zulassen, zum Beispiel bei Übermittlung einer Kontaktanfrage über unser Kontaktformular, ist erforderlich, um unseren vertraglichen Verpflichtungen Ihnen gegenüber nachzukommen und damit wir Ihnen unsere Services bereitstellen, unser legitimes Interesse schützen sowie rechtlichen und finanziellen Regulierungsverpflichtungen, denen wir unterworfen sind, nachkommen können.",
  },
  {
    type: "p",
    text: "Durch die Nutzung dieser Webseite stimmen Sie der Erfassung, Speicherung, Verwendung, Offenlegung und sonstigen Nutzung Ihrer personenbezogenen Daten wie in diesen Datenschutzbestimmungen beschrieben zu. Bitte lesen Sie sich die Datenschutzbestimmungen sorgfältig durch, bevor Sie Entscheidungen treffen.",
  },
  { type: "h", text: "Welche Daten werden erfasst?" },
  {
    type: "p",
    text: "Wir erfassen zwei Arten von Daten und Informationen von Benutzern. Zur ersten Kategorie gehören nicht identifizierende und nicht identifizierbare Benutzerdaten, die durch die Nutzung der Webseite bereitgestellt oder erfasst werden (nicht personenbezogene Daten). Dazu gehören aggregierte Nutzungsdaten und technische Daten, die von Ihrem Gerät übermittelt werden, einschließlich bestimmter Informationen bezüglich Software und Hardware, zum Beispiel Browser und Betriebssystem, Spracheinstellung und Zugriffszeit.",
  },
  {
    type: "p",
    text: "Zur zweiten Kategorie gehören personenbezogene Daten, also Daten, die eine Einzelperson identifizieren oder durch angemessene Maßnahmen identifizieren können. Über das Kontaktformular erfassen wir insbesondere Ihren Namen, Ihre E-Mail-Adresse und, sofern angegeben, Ihre Telefonnummer für einen Rückruf.",
  },
  { type: "h", text: "Wie werden die Daten genutzt und weitergegeben?" },
  {
    type: "p",
    text: "Wir geben Benutzerdaten nicht an Dritte weiter, außer wie in diesen Datenschutzbestimmungen beschrieben. Über das Kontakt- und Bewerbungsformular übermittelte Angaben nutzen wir ausschließlich zur Bearbeitung Ihrer Anfrage beziehungsweise Bewerbung und zur Kommunikation mit Ihnen.",
  },
  {
    type: "p",
    text: "Wir können Daten offenlegen, wenn wir im guten Glauben sind, dies ist hilfreich oder angemessen, um geltenden Gesetzen, Vorschriften, Gerichtsverfahren oder behördlichen Anfragen zu entsprechen, unsere Richtlinien durchzusetzen, mögliche Verletzungen zu untersuchen oder die Rechte, das Eigentum und die Sicherheit unserer Benutzer und Dritter zu schützen.",
  },
  { type: "h", text: "Wie schützen wir Ihre Daten?" },
  {
    type: "p",
    text: "Wir setzen die Sicherheitsmaßnahmen auf der Webseite mit großer Sorgfalt um und schützen Ihre Daten. Wir verwenden in der Branche übliche Verfahren und Richtlinien, um den Schutz der erfassten und gespeicherten Daten sicherzustellen, und verhindern die unbefugte Verwendung solcher Daten. Obwohl wir angemessene Schritte für den Schutz von Daten unternehmen, kann keine Übertragung über das Internet vollständige Sicherheit gewährleisten.",
  },
  { type: "h", text: "Minderjährige" },
  {
    type: "p",
    text: "Der Schutz der Daten von Kindern ist uns wichtig. Die Webseite ist nicht für Kinder konzipiert und richtet sich nicht an diese. Die Nutzung unserer Services durch Minderjährige ist nur mit vorheriger Einwilligung eines Elternteils oder Erziehungsberechtigten zulässig. Wenn ein Elternteil oder Erziehungsberechtigter Kenntnis davon erlangt, dass sein Kind uns ohne Einwilligung personenbezogene Daten bereitgestellt hat, kann er sich unter info@krankengymnastik-in-hannover.de an uns wenden.",
  },
  { type: "h", text: "Aktualisierungen dieser Datenschutzbestimmungen" },
  {
    type: "p",
    text: "Wir behalten uns das Recht vor, diese Datenschutzbestimmungen von Zeit zu Zeit zu ändern oder zu prüfen. Ihre fortgesetzte Nutzung der Webseite nach der Bekanntmachung solcher Änderungen gilt als Ihr Einverständnis mit den geänderten Bestimmungen.",
  },
  { type: "h", text: "So erreichen Sie uns" },
  {
    type: "p",
    text: "Wenden Sie sich bei allgemeinen Fragen zur Webseite, zu den von uns über Sie erfassten Daten oder der Verwendung dieser Daten unter info@krankengymnastik-in-hannover.de an uns.",
  },
  {
    type: "p",
    text: "Physiotherapie Zentrum Nord, Inhaber Tareck Fares, Voßstr. 1, 30161 Hannover, Telefon +49 (0)511 / 713 03 044.",
  },
];

export const impressum = {
  intro: "Angaben nach §5 TMG",
  responsible: "Physiotherapeut Tareck Fares",
  contactLines: [
    "Voßstr. 1",
    "30161 Hannover",
  ],
  taxId: "26/112/10076",
  liability: [
    {
      h: "Haftung für Inhalte",
      p: "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach den §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
    },
    {
      h: "Haftung für Links",
      p: "Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
    },
    {
      h: "Urheberrecht",
      p: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
    },
  ],
};
