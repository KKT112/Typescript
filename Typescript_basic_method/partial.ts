interface Cricket {
	name: string;
	d_number: number;
	country: string;
}

type betsman = Partial<Cricket>;                    //type ma koi pan value store kari sakay chhe..,
const partialUser: betsman = {
	name: "dhoni",
	d_number: 7, 
                                  // koi pan object ne lai sakay chhe kem ke partial object ni key provide kari ape chhe..,
};
console.log("PartialUser type:", partialUser);