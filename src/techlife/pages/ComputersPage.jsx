import { MediaCardItems } from '../components/MediaCardItems';
import { getComputersByType } from '../helpers/getComputersByType'
import { types } from '../types/types';

export const ComputersPage = () => {

  const computers = getComputersByType(types.computers);

  return (
    <>
      <MediaCardItems items={ computers } />
    </>
  )
}
