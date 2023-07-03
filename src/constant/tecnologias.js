import iconReact from "../assets/icons/icon-react.png";
import iconCSharp from "../assets/icons/icon-c-sharp.png";
import iconCss from "../assets/icons/icon-css.png";
import iconDefault from "../assets/icons/icon-default.png";
import iconDocker from "../assets/icons/icon-docker.png";
import iconDotnet from "../assets/icons/icon-dotnet.png";
import iconHtml from "../assets/icons/icon-html.png";
import iconJava from "../assets/icons/icon-java.png";
import iconJavascript from "../assets/icons/icon-javascript.png";
import iconPostgre from "../assets/icons/icon-postgre.png";
import iconSqlite from "../assets/icons/icon-sqlite.png";
import iconMysql from "../assets/icons/icon-mysql.png";
import iconSpring from "../assets/icons/icon-spring.png";
import iconSql from "../assets/icons/icon-sql.png";
import iconGit from "../assets/icons/icon-git.png";

const optionsIcons = {
  SPRING: iconSpring,
  REACT: iconReact,
  JAVA: iconJava,
  CSHARP: iconCSharp,
  CSS: iconCss,
  DEFAULT: iconDefault,
  DOCKER: iconDocker,
  DOTNET: iconDotnet,
  HTML: iconHtml,
  JAVASCRIPT: iconJavascript,
  POSTGRE: iconPostgre,
  SQLITE: iconSqlite,
  MYSQL: iconMysql,
  SQL: iconSql,
  GIT: iconGit,
};

const tecnologias = [
  {
    name: "Spring",
    image: optionsIcons.SPRING,
  },
  {
    name: "Java",
    image: optionsIcons.JAVA,
  },
  {
    name: ".NET",
    image: optionsIcons.DOTNET,
  },
  {
    name: "C#",
    image: optionsIcons.CSHARP,
  },
  {
    name: "React",
    image: optionsIcons.REACT,
  },
  {
    name: "Javascript",
    image: optionsIcons.JAVASCRIPT,
  },
  {
    name: "HTML",
    image: optionsIcons.HTML,
  },
  {
    name: "CSS",
    image: optionsIcons.CSS,
  },

  {
    name: "Sql ",
    image: optionsIcons.SQL,
  },
  {
    name: "MySQL",
    image: optionsIcons.MYSQL,
  },
  {
    name: "PostgreSQL",
    image: optionsIcons.POSTGRE,
  },
  {
    name: "SQLite",
    image: optionsIcons.SQLITE,
  },
  {
    name: "Docker",
    image: optionsIcons.DOCKER,
  },
  {
    name: "GIT",
    image: optionsIcons.GIT,
  },
];

export default tecnologias;
