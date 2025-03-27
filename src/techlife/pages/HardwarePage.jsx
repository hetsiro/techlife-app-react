import { MediaCardComputers } from '../components/MediaCardComputers';
import { getComputersByType } from '../helpers/getComputersByType';
import { types } from '../types/types';

export const HardwarePage = () => {

  const computers = getComputersByType(types.hardware);

  return (
    <>
      <MediaCardComputers computers={ computers } />
    </>
  )
}
