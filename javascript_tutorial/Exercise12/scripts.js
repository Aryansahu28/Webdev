const backgroundcolor = [
  "#7A3E9D", "#2FD4A1", "#F96B5C", "#3B82F6", "#EAB308",
  "#14B8A6", "#F43F5E", "#8B5CF6", "#22C55E", "#F97316",
  "#06B6D4", "#A855F7", "#84CC16", "#EC4899", "#10B981",
  "#6366F1", "#D946EF", "#F59E0B", "#4ADE80", "#0EA5E9"
]

const colors = [
  "#1F2937", "#FCA5A5", "#86EFAC", "#93C5FD", "#FDE68A",
  "#C4B5FD", "#FDBA74", "#67E8F9", "#F9A8D4", "#A7F3D0",
  "#D9F99D", "#FECACA", "#BFDBFE", "#DDD6FE", "#FCD34D",
  "#99F6E4", "#FBCFE8", "#BBF7D0", "#E9D5FF", "#F5D0FE"
]

document.querySelectorAll(".box").forEach(e =>{
    calc_index_random = (Math.ceil(Math.random()*1000))%20
    console.log(`${e} has ${calc_index_random}`)
    e.style.backgroundColor=`${backgroundcolor[calc_index_random]}`
    // e.style.color=`${backgroundcolor[calc_index_random]}`
})
document.querySelectorAll(".box").forEach(e =>{
    calc_index_random = (Math.ceil(Math.random()*1000))%20
    console.log(`${e} has ${calc_index_random}`)
    // e.style.backgroundColor=`${backgroundcolor[calc_index_random]}`
    e.style.color=`${colors[calc_index_random]}`
})  


