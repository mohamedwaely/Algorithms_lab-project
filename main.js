
const container = document.querySelector(".data-container");

// function to generate bars
function generatebars(num = 20) {
	
for (let i = 0; i < num; i += 1) {

	const value = Math.floor(Math.random() * 100) + 1;
	
	const bar = document.createElement("div");

	bar.classList.add("bar");

	bar.style.height = `${value * 3}px`;

	bar.style.transform = `translateX(${i * 30}px)`;
	
	const barLabel = document.createElement("label");

	barLabel.classList.add("bar_id");

	barLabel.innerHTML = value;
	
	bar.appendChild(barLabel);

	container.appendChild(bar);
}
}

async function SelectionSort() {
let bars = document.querySelectorAll(".bar");
let timetkn =document.getElementById("time");
let swaptkn =document.getElementById("swap");
var min_idx = 0;
for (var i = 0; i < bars.length; i += 1) {
	let start=new Date();

	min_idx = i;

	bars[i].style.backgroundColor = "darkblue";
	for (var j = i + 1; j < bars.length; j += 1) {

	bars[j].style.backgroundColor = "darkcyan";
		
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, 0)
	);

	var val1 = parseInt(bars[j].childNodes[0].innerHTML);

	var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
		
	if (val1 < val2) {
		if (min_idx !== i) {

		bars[min_idx].style.backgroundColor = " red";
		}
		min_idx = j;
	} else {

		bars[j].style.backgroundColor = " rgb(24, 190, 255)";
	}
	}

	if(min_idx!=i){
		swaptkn.innerHTML++;
	}
	var temp1 = bars[min_idx].style.height;
	var temp2 = bars[min_idx].childNodes[0].innerText;
	bars[min_idx].style.height = bars[i].style.height;
	bars[i].style.height = temp1;
	bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
	bars[i].childNodes[0].innerText = temp2;
	
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 10)
	);

	bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";

	bars[i].style.backgroundColor = " rgb(49, 226, 13)";
	let end=new Date();
	timetkn.innerHTML=parseFloat(timetkn.innerHTML)+((end-start)/1000);
}

document.getElementById("Button1").disabled = false;
document.getElementById("Button1").style.backgroundColor = "#6f459e";

	document.getElementById("Button1").disabled = false;
	document.getElementById("Button1").style.backgroundColor = "#6f459e";
	document.getElementById("Button2").disabled = false;
	document.getElementById("Button2").style.backgroundColor = "#6f459e";
	document.getElementById("Button3").disabled = false;
	document.getElementById("Button3").style.backgroundColor = "#6f459e";
	document.getElementById("Button4").disabled = false;
	document.getElementById("Button4").style.backgroundColor = "#6f459e";
}

async function InsertionSort() {
	let bars = document.querySelectorAll(".bar");
	let timetkn = document.getElementById("time");
	let swaptkn = document.getElementById("swap");
  
	for (var i = 1; i < bars.length; i++) {
	  let start = new Date();
  
	  bars[i].style.backgroundColor = "green";
  
	  const keyVal = parseInt(bars[i].childNodes[0].innerHTML);
	  const keyHeight = bars[i].style.height;
  
	  let j = i - 1;
	  while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > keyVal) {
		bars[j].style.backgroundColor = "green";
  
		await new Promise((resolve) => setTimeout(() => resolve(), 0));
  
		bars[j + 1].style.height = bars[j].style.height;
		bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
		j--;
	  }
  
	  bars[j + 1].style.height = keyHeight;
	  bars[j + 1].childNodes[0].innerText = keyVal;
  
	  if (j + 1 !== i) {
		swaptkn.innerHTML++;
	  }
  
	  await new Promise((resolve) => setTimeout(() => resolve(), 10));
  
	  bars[i].style.backgroundColor = "green";  
	  bars[j + 1].style.backgroundColor = "green";  
  
	  let end = new Date();
	  timetkn.innerHTML = parseFloat(timetkn.innerHTML) + ((end - start) / 1000);
	}
  
	// Enable buttons after sorting
	document.getElementById("Button1").disabled = false;
	document.getElementById("Button1").style.backgroundColor = "#6f459e";
	document.getElementById("Button2").disabled = false;
	document.getElementById("Button2").style.backgroundColor = "#6f459e";
	document.getElementById("Button3").disabled = false;
	document.getElementById("Button3").style.backgroundColor = "#6f459e";
	document.getElementById("Button4").disabled = false;
	document.getElementById("Button4").style.backgroundColor = "#6f459e";

  }



async function mergeSort() {
    let bars = document.querySelectorAll(".bar");
    let timetkn = document.getElementById("time");
    let swaptkn = document.getElementById("swap");



    async function merge(l, m, r) {
        let start = new Date();

        let n1 = m - l + 1;
        let n2 = r - m;

        let L = new Array(n1);
        let R = new Array(n2);

        for (let i = 0; i < n1; i++) {
            L[i] = bars[l + i].style.height;
        }
        for (let j = 0; j < n2; j++) {
            R[j] = bars[m + 1 + j].style.height;
        }


        let i = 0, j = 0;

        let k = l;

        while (i < n1 && j < n2) {
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 0)
            );

            let val1 = parseInt(L[i]);
            let val2 = parseInt(R[j]);

            bars[l + i].style.backgroundColor = "green";
            bars[m + 1 + j].style.backgroundColor = "green";

            if (val1 <= val2) {
                if (i > 0) {
                    bars[l + i - 1].style.backgroundColor = "green";
                }

                bars[k].style.height = L[i];
                bars[k].childNodes[0].innerText = parseInt(L[i]);

                i++;
            } else {
                if (j > 0) {
                    bars[m + 1 + j - 1].style.backgroundColor = "green";
                }

                bars[k].style.height = R[j];
                bars[k].childNodes[0].innerText = parseInt(R[j]);

                j++;

            }

            k++;
        }

        if (i > 0) {
            bars[l + i - 1].style.backgroundColor = "green";
        }
        if (j > 0) {
            bars[m + 1 + j - 1].style.backgroundColor = "green";
        }

        while (i < n1) {
            bars[k].style.height = L[i];
            bars[k].childNodes[0].innerText = parseInt(L[i]);
            i++;
            k++;
        }

        while (j < n2) {
            bars[k].style.height = R[j];
            bars[k].childNodes[0].innerText = parseInt(R[j]);
            j++;
            k++;
        }

        let end = new Date();
        timetkn.innerHTML = parseFloat(timetkn.innerHTML) + ((end - start) / 1000);
    }

    async function mergeSortUtil(l, r) {
        if (l < r) {
            let m = Math.floor(l + (r - l) / 2);

            await mergeSortUtil(l, m);
            await mergeSortUtil(m + 1, r);

            await merge(l, m, r);
        }
    }

    await mergeSortUtil(0, bars.length - 1);


	document.getElementById("Button1").disabled = false;
	document.getElementById("Button1").style.backgroundColor = "#6f459e";
	document.getElementById("Button2").disabled = false;
	document.getElementById("Button2").style.backgroundColor = "#6f459e";
	document.getElementById("Button3").disabled = false;
	document.getElementById("Button3").style.backgroundColor = "#6f459e";
	document.getElementById("Button4").disabled = false;
	document.getElementById("Button4").style.backgroundColor = "#6f459e";
}



// Call "generatebars" function
generatebars();

// function to generate new random array
function generate()
{
window.location.reload();
}

// function to disable the button
function disable()
{
// To disable the button "Generate New Array"
document.getElementById("Button1").disabled = true;
document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

// To disable the button "Selection Sort"
document.getElementById("Button2").disabled = true;
document.getElementById("Button2").style.backgroundColor = "#d8b6ff";

document.getElementById("Button3").disabled = true;
document.getElementById("Button3").style.backgroundColor = "#d8b6ff";
document.getElementById("Button4").disabled = true;
document.getElementById("Button4").style.backgroundColor = "#d8b6ff";
}


