import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';
export const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>Upload stats</h2>}
      <ul className={s.statlist}>
        {stats.map(elem => (
          <li
            key={elem.id}
            className={s.item}
            style={{ backgroundColor: '#' + randomColor() }}
          >
            <span className={s.label}>{elem.label}</span>
            <span className={s.percentage}>{elem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
