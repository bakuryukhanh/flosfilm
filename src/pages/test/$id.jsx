import { useParams } from 'umi';

export default function Test() {
  const { id } = useParams();
  return <div>test {id}</div>;
}
