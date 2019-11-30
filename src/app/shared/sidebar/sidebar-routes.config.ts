import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '/components/carousel', title: 'Carrusel', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/components/videoembebido', title: 'Video Embebido', icon: 'ft-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/components/editor', title: 'Editor Texto', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    
    {
        path: '/components/map', title: 'Mapa google', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    /*
    {
        path: '/content-layout', title: 'Content Layout', icon: 'ft-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    */
    {
        path: '', title: 'Api Rest', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [
            { path: 'javascript:;', title: 'Productos', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
                { path: '/apicomponents/crear-producto;', title: 'Nuevo Producto', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                { path: '/apicomponents/buscar-producto', title: 'Buscar Producto', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                
            ] },
            { path: 'javascript:;', title: 'Usuarios', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
                { path: '/apicomponents/crear-usuario;', title: 'Nuevo Usuario', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                { path: '/apicomponents/buscar-usuario', title: 'Buscar Usuario', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                
            ] },
            { path: 'javascript:;', title: 'Lote', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
                { path: '/apicomponents/crear-lote;', title: 'Nuevo Lote', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                { path: '/apicomponents/buscar-lote', title: 'Buscar Lote', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                
            ] },
            
            /*
            { path: 'javascript:;', title: 'Detalle de Venta', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
                { path: 'javascript:;', title: 'Buscar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            ] },
            { path: 'javascript:;', title: 'Lote', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
                { path: 'javascript:;', title: 'Crear', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                { path: 'javascript:;', title: 'Modificar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                { path: 'javascript:;', title: 'Buscar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                { path: 'javascript:;', title: 'Deshabilitar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            ] },
            { path: 'javascript:;', title: 'Usuario', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
                { path: 'javascript:;', title: 'Crear', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                { path: 'javascript:;', title: 'Modificar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                { path: 'javascript:;', title: 'Buscar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                { path: 'javascript:;', title: 'Deshabilitar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            ] },
            { path: 'javascript:;', title: 'Vendedor', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
                { path: 'javascript:;', title: 'Modificar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                { path: 'javascript:;', title: 'Buscar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                { path: 'javascript:;', title: 'Deshabilitar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            ] },
            { path: 'javascript:;', title: 'Venta', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
                { path: 'javascript:;', title: 'Crear', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                { path: 'javascript:;', title: 'Modificar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                { path: 'javascript:;', title: 'Buscar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                { path: 'javascript:;', title: 'Deshabilitar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            ] },
            */
            
        ]
    },
];
