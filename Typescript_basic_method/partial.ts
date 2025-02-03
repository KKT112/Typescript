interface Cricket {
	name: string;
	s_number: number;
	country: string;
}

type betsman = Partial<Cricket>;                    //type ma koi pan value store kari sakay chhe..,
const partialUser: betsman = {
	name: "GeeksforGeeks",
	s_number: 29,                                 // koi pan object ne lai sakay chhe kem ke partial object ni key provide kari ape chhe..,
};
console.log("PartialUser type:", partialUser);