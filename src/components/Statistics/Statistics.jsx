const Statistics = ({ title, data }) => {
  console.log(data);

  const list = data.map(({ id, label, percentage }) => {
    return (
      <li key={id} class="item">
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
      </li>
    );
  });

  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      <ul class="stat-list">{list}</ul>
    </section>
  );
};

export default Statistics;
