export const SociosMenu = [
  {
    name: 'Configuración',
    isSection: true,
    icon: 'fa fa-book',
    isModule: false,
    route: '',
    submenu: [
      {
        name: 'Clasificación de Socios',
        icon: 'pi pi-document',
        route: '/socios/clasificacionesSocios',
        //permission: 'contabilidad.cuenta-contable.list',
        isSection: true,
        isModule: false,
        submenu: [],
      },
      {
        name: 'Tipo de Documentos',
        icon: 'pi pi-document',
        route: '/socios/tipoDocumentos',   
        isSection: true,
        isModule: false,
        submenu: [],
      },
      {
        name: 'Socios',
        icon: 'pi pi-document',
        route: '/socios/socios',   
        isSection: true,
        isModule: false,
        submenu: [],
      },
    ],
  },
  {
    name: 'Reportes',
    isSection: true,
    icon: 'pi pi-book',
    isModule: false,
    route: '',
    submenu: [],
  },
];
