import { MediaCardComputers } from '../components/MediaCardComputers';
import { getComputersByType } from '../helpers/getComputersByType'
import { types } from '../types/types';

export const ComputersPage = () => {

  const computers = getComputersByType(types.computers);

  return (
    <>
      <MediaCardComputers computers={ computers } />
    </>
  )
}
