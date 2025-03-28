import { MediaCardItems } from '../components/MediaCardItems';
import { getComputersByType } from '../helpers/getComputersByType';
import { types } from '../types/types';

export const HardwarePage = () => {

  const hardware = getComputersByType(types.hardware);

  return (
    <>
      <MediaCardItems items={ hardware } />
    </>
  )
}
