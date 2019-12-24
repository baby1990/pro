import { Photon } from '@prisma/photon'

const photon = new Photon();

export type Context = {
	request: any,
	photon: Photon
}

export const createContext = async ({req}: any): Promise<Context> => ({
	request: req,
	photon,
});