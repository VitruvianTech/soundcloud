import {getModels} from '@machete-platform/core-bundle/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.create({
      route: 'soundcloud/download',
      title: 'VitruvianTech - SoundCloud Downloader',
      headers: '["@vitruvian-tech/machete-bundle:Title", "@vitruvian-tech/machete-bundle:Contact"]',
      sections: '["@soundcloud-downloader/machete-bundle:Download"]'
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.destroy({
      where: {
        route: 'soundcloud/download',
        title: 'VitruvianTech - SoundCloud Downloader',
        headers: '["@vitruvian-tech/machete-bundle:Title", "@vitruvian-tech/machete-bundle:Contact"]',
        sections: '["@soundcloud-downloader/machete-bundle:Download"]'
      }
    });
  }
}
