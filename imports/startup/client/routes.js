/**
 * Created by Hashtag Gigs on 4/8/2017.
 */
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Modules } from '../../modules/modules';

import '../../ui/layouts/main-layout';

FlowRouter.route(`/${Modules.Text.PathName.MapsPage}`, {
    name: Modules.Text.RouteName.MapsPage,
    action: () => {
        BlazeLayout.render(Modules.Text.TemplateName.MainLayout, { content: Modules.Text.TemplateName.MapsPage });
    }
});

FlowRouter.route('/', {
    name: Modules.Text.RouteName.Default,
    action: () => {
        FlowRouter.go(Modules.Text.RouteName.MapsPage);
    }
});