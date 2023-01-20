/* eslint-disable no-unused-vars */
import styles from './TagContainer.module.css';
import Tag from '../../components/Tag/Tag';

export default function TagContainer({ tags }) {
  return (
    <div className={styles.tagContainer}>
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </div>
  );
}
