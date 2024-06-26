import React from "react";
import "../styles/Manager.scss";

const ProjectManager = () => {
  return (
    <div className="manager">
      <div className="project-manager">
        <div className="project-container">
          <h1>Проектный менеджер</h1>
          <p>
            Проектный менеджер — это специалист, который координирует все
            аспекты проекта, от начала до завершения. Основная задача проектного
            менеджера заключается в обеспечении того, чтобы проект был завершён
            в срок, в рамках бюджета и с нужным качеством. Вот ключевые
            обязанности проектного менеджера:
          </p>
          <ul>
            <li>
              Планирование проекта: Определение целей, сроков и ресурсов,
              необходимых для выполнения проекта.
            </li>
            <li>
              Организация работы: Координация действий команды, распределение
              задач и ресурсов.
            </li>
            <li>
              Контроль и управление: Мониторинг хода выполнения проекта, его
              соответствия планам и бюджету.
            </li>
            <li>
              Решение проблем: Оперативное устранение возникающих проблем и
              препятствий.
            </li>
            <li>
              Коммуникация: Поддержание связи со всеми заинтересованными
              сторонами, включая команду, заказчиков и поставщиков.
            </li>
            <li>
              Анализ и отчётность: Оценка результатов проекта, подготовка
              отчетов о проделанной работе и достигнутых результатах.
            </li>
          </ul>
          <p>
            Проектный менеджер играет ключевую роль в успешном выполнении
            проектов, обеспечивая их эффективность и качество.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectManager;
