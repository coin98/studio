import { PresenterTemplate } from '~app-toolkit/decorators/presenter-template.decorator';
import { RariFusePositionPresenter } from '~apps/rari-fuse/common/rari-fuse.position-presenter';

import MARKET_XYZ_DEFINITION from '../market-xyz.definition';

@PresenterTemplate()
export class PolygonMarketXyzPositionPresenter extends RariFusePositionPresenter {
  positionGroups = [
    {
      label: '{{ dataProps.marketName }}',
      groupIds: [MARKET_XYZ_DEFINITION.groups.borrow.id, MARKET_XYZ_DEFINITION.groups.supply.id],
    },
  ];
}
