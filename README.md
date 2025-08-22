# Problem 001: Tree Diameter Contraction (https://codeforces.com/contest/2131/problem/D)

**Rating Range**: 1300-1500  
**Estimated Difficulty**: ~1500  
**Topics**: graphs, trees, greedy  
**Time Limit**: 2 seconds  
**Memory Limit**: 256 MB  

---

## Problem Statement

Given a tree with **n** vertices, you may perform the following operation:
1. Choose vertices **s** and **t**. Let the simple path between them be **v₀, v₁, …, vₖ** (v₀ = s, vₖ = t).
2. Remove all edges `(v₀–v₁), (v₁–v₂), …, (vₖ₋₁–vₖ)`.
3. Connect each of `v₁, v₂, …, vₖ` directly to `v₀`.

After each operation, the graph remains a tree. Your task is to use the minimum number of operations to minimize the tree’s diameter.

---

## Input Format

- First line: integer **t** — number of test cases (1 ≤ **t** ≤ 10⁴).
- For each test case:
  - Integer **n** — number of vertices (2 ≤ **n** ≤ 2×10⁵).
  - Next **n − 1** lines: edges **u v** describing the tree structure.
- Sum of **n** over all test cases does not exceed 2×10⁵.

---

## Output Format

For each test case, print the **minimum number of operations** needed to minimize the tree's diameter.

---

## Sample Input
4  
4  
1 2  
1 3  
2 4  
2  
2 1  
4  
1 2  
2 3  
2 4  
11  
1 2  
1 3  
2 4  
3 5  
3 8  
5 6  
5 7  
7 9  
7 10  
5 11


## Sample Output  
1  
0  
0  
4  

## Explanation

### Example 1
In the first test case, the diameter of the original tree is 3. Perform operations on s=3 and t=4. It includes the following operations:

1.Remove edges (3,1), (1,2)and (2,4).
2.Add edges (3,1),(3,2)and (3,4).
<img src="assets/001.png" alt="Example Image" width="400"/>
After the operation, the diameter reduces to 2. It can be shown that 2 is the minimum diameter.

### Example 2

In the second test case, the diameter of the tree is 1. It can be shown that 1 is already the minimum, so no operations are needed.

## Hints

- What is the minimum diameter achievable?
- How are leaves significant?

## Editorial
We first handle the case where 𝑛=2
. The diameter is 1
, and we do not need to perform any operations.

For 𝑛>2, it can be proven that the minimum diameter achievable is 2. You can choose any vertex as the root, and repeatedly perform the operations to make every other vertex a child of it.

Let's fix the final root of the tree as 𝑟. Denote 𝑝𝑢 as the parent of 𝑢, and 𝑑𝑢 as the depth of 𝑢. We define 𝑑𝑢 as such:
- 𝑑𝑢=0
- 𝑑𝑢=𝑑𝑝𝑢+1
.
For vertices with depth no larger than 1, we do not need to perform any operations on them as they are already in their desired positions. For vertices with depth larger than 1, notice that in every operation, only one of the vertices on the path selected can be a leaf. This means that we can only "get rid" of one leaf in one operation. Also, you can always choose the path where one end is 𝑟 and the other end is a leaf with depth larger than 1. Doing so for all leaves with depth larger than 1 guarantees all vertices to be a child of 𝑟. Hence, the minimum number of operations for fixed root 𝑟 is the number of leaves with depth larger than 1. The final answer would be the minimum over all choices of roots.

With careful implementation, the final complexity should be 𝑂(𝑛) per test case.

## Implementation

```cpp
#include <bits/stdc++.h>
#define ll long long
#define pb push_back
#define fast_io ios::sync_with_stdio(0); cin.tie(0); cout.tie(0)
#define vl vector <ll>
#define vi vector <int>
using namespace std;
const ll MOD = 1e9 + 7;
const ll INF = 1e18;
const double EPS = 1e-9;
#define pi <pair<int, int>>
#define pl <pair<ll, ll>>
#define vll vector <vl>;
#define vii vector <vii>;
#define F first
#define S second
#define fr(i, a, n) for (ll i = a; i < n; i++)
#define all(x) (x).begin(), (x).end()
#define debug(x) cerr << #x << " = " << x << endl
#define ump(a, b) unordered_map<a, b>


void fast_io_setup() {
    #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
    #endif
    fast_io;
}

ll gcd(ll a, ll b) {
    return b ? gcd(b, a % b) : a;
}

ll lcm(ll a, ll b) {
    return (a / gcd(a, b)) * b;
}

void solve() {
	ll n;
	cin >> n;
	vector<vl> adj(n);
	vl deg(n, 0);
	fr(i, 0, n-1) {
		ll x,y;
		cin >> x >> y;
		x--, y--;
		adj[x].pb(y);
		adj[y].pb(x);
		deg[x]++, deg[y]++;
	} 
	if (n<=3) {
		cout << 0 << endl;
		return;
	}
	ll c = 0;
	fr(i, 0, n) {
		if (deg[i] == 1) c++;
	}
	ll mx = 0;
	fr(i, 0, n) {
		ll lc = 0;
		for(auto it : adj[i]) {
			if (deg[it] == 1) lc++;
		}
		mx = max(mx, lc);
	}
	cout << c-mx << endl;
}

int main() {
    fast_io_setup();
    int t;
    cin >> t;
    while(t--) solve();
    return 0;
}
